import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InitSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const initSteps = [
    { text: "> Initializing system...", delay: 500 },
    { text: "> Loading dependencies...", delay: 800 },
    { text: "> Configuring environment...", delay: 1000 },
    { text: "> Running security checks...", delay: 1200 },
    { text: "> Optimizing components...", delay: 1500 },
    { text: "> Importing portfolio data...", delay: 1800 },
    { text: "> Rendering UI components...", delay: 2000 },
    { text: "> System ready. Welcome to Abhijat's portfolio.", delay: 2200 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 1000); // Wait 1 second after reaching 100% before completing
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Update progress every 50ms

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Calculate which step to show based on progress
    const stepIndex = Math.floor((progress / 100) * initSteps.length);
    if (stepIndex !== currentStep && stepIndex < initSteps.length) {
      setCurrentStep(stepIndex);
    }
  }, [progress, currentStep]);

  return (
    <motion.div 
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div 
        className="w-full max-w-lg px-6"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-green-400 mb-4 font-mono">System Boot</h1>
        
        <div className="mb-8 space-y-3 font-mono">
          {initSteps.slice(0, currentStep + 1).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-300"
            >
              {step.text}
              {index === currentStep && (
                <motion.span 
                  className="inline-block h-4 w-2 ml-1 bg-green-400 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
          <motion.div 
            className="bg-green-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400 font-mono">
          <span>boot.jsx</span>
          <span>{progress}%</span>
        </div>
        
        <div className="mt-6 flex justify-between">
          <motion.div
            className="flex space-x-1 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
          </motion.div>
          
          <div className="text-gray-500 text-xs font-mono">
            v1.0.0
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InitSequence;