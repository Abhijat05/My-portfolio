import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const InitSequence = ({ onComplete }) => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showSkip, setShowSkip] = useState(true);
  const progressIntervalRef = useRef(null);
  
  // More engaging steps with better wording
  const initSteps = [
    { text: "> Initializing system...", delay: 300 },
    { text: "> Loading portfolio assets...", delay: 450 },
    { text: "> Running security checks...", delay: 500 },
    { text: "> Welcome to Abhijat's portfolio.", delay: 600 }
  ];

  // Handle typing animation - keep the faster typing
  useEffect(() => {
    if (currentStep < initSteps.length) {
      const currentStepText = initSteps[currentStep].text;
      
      if (currentCharIndex < currentStepText.length && isTyping) {
        const typingTimeout = setTimeout(() => {
          setTypingText(prevText => prevText + currentStepText[currentCharIndex]);
          setCurrentCharIndex(prevIndex => prevIndex + 1);
        }, 20); // Even slightly faster typing for better responsiveness
        
        return () => clearTimeout(typingTimeout);
      } else if (currentCharIndex >= currentStepText.length) {
        setIsTyping(false);
      }
    }
  }, [currentStep, currentCharIndex, isTyping, initSteps]);

  // Progress bar - keep the same timing but make progression feel smoother
  useEffect(() => {
    // First 80% goes quickly, last 20% a bit slower for visual effect
    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current);
          setTimeout(() => onComplete(), 400); // Even quicker transition out
          return 100;
        }
        // More natural progress curve
        return prev < 80 ? prev + 2.2 : prev + 0.7;
      });
    }, 30); // Keep the same interval

    // Keep the 5-second maximum time limit
    const maxTimeTimer = setTimeout(() => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      setProgress(100);
      setTimeout(() => onComplete(), 400);
    }, 5000); 
    
    return () => {
      clearInterval(progressIntervalRef.current);
      clearTimeout(maxTimeTimer);
    };
  }, [onComplete]);

  // Keep the same step progression logic
  useEffect(() => {
    const stepIndex = Math.floor((progress / 100) * initSteps.length);
    
    if (stepIndex !== currentStep && stepIndex < initSteps.length) {
      setCurrentStep(stepIndex);
      setTypingText('');
      setCurrentCharIndex(0);
      setIsTyping(true);
    }
  }, [progress, currentStep, initSteps]);

  // Keep space bar skip - it's great for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
        handleSkip();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Skip functionality
  const handleSkip = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    setProgress(100);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div 
        className="w-full max-w-lg px-6"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1 
          className="text-3xl font-bold text-green-400 mb-4 font-mono flex items-center"
          animate={{ 
            textShadow: ["0 0 5px rgba(74, 222, 128, 0)", "0 0 15px rgba(74, 222, 128, 0.5)", "0 0 5px rgba(74, 222, 128, 0)"]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.span
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="inline-block mr-2"
          >
            ⚡
          </motion.span> 
          System Boot
        </motion.h1>
        
        <div className="mb-6 space-y-2 font-mono min-h-[160px] border border-green-800/30 bg-black/50 p-4 rounded-md">
          {/* Previously completed steps */}
          {initSteps.slice(0, currentStep).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-gray-300"
            >
              {step.text}
            </motion.div>
          ))}
          
          {/* Current typing step */}
          {currentStep < initSteps.length && (
            <motion.div 
              className="text-gray-300 flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className={`text-green-400 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                {typingText}
              </span>
              <motion.span 
                className={`inline-block h-4 w-2 ml-1 ${theme === 'dark' ? 'bg-green-400' : 'bg-green-600'} align-middle`}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              />
            </motion.div>
          )}
        </div>
        
        {/* Progress bar with gradient */}
        <div className="w-full bg-gray-800 rounded-full h-3 mb-2 overflow-hidden border border-gray-700">
          <motion.div 
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #34d399 0%, #10b981 100%)",
              boxShadow: "0 0 10px rgba(16, 185, 129, 0.5)"
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-gray-400 font-mono">
          <motion.span
            animate={{ color: ["#4B5563", "#10B981", "#4B5563"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            portfolio.jsx
          </motion.span>
          <span>{Math.round(progress)}%</span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <motion.div
            className="flex space-x-1 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
          </motion.div>
          
          <div className="flex items-center gap-3">
            <AnimatePresence>
              {showSkip && (
                <motion.button
                  onClick={handleSkip}
                  className="text-xs text-green-400 hover:text-green-300 border border-green-800/50 px-3 py-1 rounded"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Skip Boot [Space]
                </motion.button>
              )}
            </AnimatePresence>
            
            <div className="text-gray-500 text-xs font-mono">
              v1.0.0
            </div>
          </div>
        </div>
        
        {/* Random data flow with more developer-friendly content */}
        <div className="absolute left-0 right-0 bottom-4 overflow-hidden text-green-900 text-opacity-10 font-mono text-xs flex">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 12,
              ease: "linear"
            }}
            className="whitespace-nowrap"
          >
            010101 REACT:18 INITIALIZED 110010 TAILWIND CSS LOADED 101001 FRAMER MOTION READY 010101 FONTS LOADED 110010 PORTFOLIO DATA FETCHED 101010...
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InitSequence;