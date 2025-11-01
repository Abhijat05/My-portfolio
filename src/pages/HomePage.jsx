import React, { useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutMe from '../components/AboutMe';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiArrowDown, HiCode, HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import RotatingText from '../../Animation/RotatingText/RotatingText';
import { ShaderAnimation } from '../components/ui/shader-animation';

// Memoize components that don't need frequent re-renders
const SocialLinks = memo(({ theme, socials }) => (
  <motion.div
    className="flex justify-center space-x-6 mb-12"
    variants={{
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
  >
    {socials.map((social, index) => (
      <motion.a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center ${theme === 'dark' ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors`}
        whileHover={{ y: -3 }}
        aria-label={social.label}
      >
        <span className="text-2xl md:text-3xl">{social.icon}</span>
        <span className="text-xs mt-1">{social.label}</span>
      </motion.a>
    ))}
  </motion.div>
));

const HomePage = () => {
  const { theme } = useTheme();

  // Define animation variants once instead of inline
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Memoize data structures that don't change
  const socialLinks = useMemo(() => [
    { icon: <FaGithub />, url: "https://github.com/Abhijat05", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/abhijat-sinha-990ab82a4", label: "LinkedIn" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/abhijat05/", label: "LeetCode" }
  ], []);

  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="w-full"
    >
      {/* Hero Section with Shader Background - Full Width */}
      <motion.div
        className="relative w-full min-h-screen flex flex-col justify-center items-center"
        variants={itemVariants}
      >
        {/* Shader Animation Background */}
        <div className="absolute inset-0 w-full h-full">
          <ShaderAnimation />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>

        {/* Main content with improved layout and higher z-index */}
        <motion.div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          {/* Improved rotating text with better styling and enhanced visibility */}
          <motion.div
            className={`inline-block mb-8 py-2.5 px-5 rounded-full bg-black/50 border-green-400/40 border backdrop-blur-md shadow-xl`}
            variants={itemVariants}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center">
              <span className="mr-2 font-medium text-green-400">I'm a</span>
              <RotatingText
                texts={['Full-Stack Developer', 'UI/UX Designer', 'Cloud Engineer', 'Data Analyst']}
                mainClassName="px-2 overflow-hidden font-semibold py-0.5 justify-center text-green-400"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.03}
                splitBy="characters"
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                rotationInterval={3000}
                elementLevelClassName="inline-block"
              />
            </div>
          </motion.div>

          {/* Title with enhanced contrast against shader background */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            variants={itemVariants}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            Hello, I'm Abhijat
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-100 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
          >
            I craft <span className="underline decoration-green-400 decoration-4 underline-offset-4">exceptional digital experiences</span> with code
          </motion.h2>

          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
          >
            Specializing in building responsive, user-friendly web applications with React,
            Node.js and modern frontend technologies that solve real-world problems.
          </motion.p>

          {/* Action buttons with enhanced styling for shader background */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-5 mb-12"
            variants={itemVariants}
          >
            <Link to="/projects">
              <motion.button
                className="px-7 py-3.5 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium flex items-center min-w-44 justify-center shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)" }}
                whileTap={{ scale: 0.97 }}
              >
                <HiCode className="mr-2 text-xl" /> View My Work
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                className="px-7 py-3.5 rounded-lg border border-green-400 text-green-400 hover:bg-green-900/30 font-medium flex items-center min-w-44 justify-center shadow-md backdrop-blur-sm"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.075)" }}
                whileTap={{ scale: 0.97 }}
              >
                <HiOutlineDocumentText className="mr-2 text-xl" /> Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social links with enhanced visibility */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-300 hover:text-green-400 transition-colors"
                whileHover={{ y: -3 }}
                aria-label={social.label}
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
              >
                <span className="text-2xl md:text-3xl">{social.icon}</span>
                <span className="text-xs mt-1">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator with enhanced visibility against shader */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center px-4 py-2 rounded-full text-gray-200 hover:text-green-400 bg-black/30 backdrop-blur-sm transition-colors"
            aria-label="Scroll down to learn more"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
          >
            <span className="text-sm mb-1 font-medium">Scroll Down</span>
            <HiArrowDown className="text-xl animate-bounce" />
          </button>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about-section"
        className={`py-16 ${theme === 'dark' ? 'bg-black/30' : 'bg-gray-50'}`}
        variants={itemVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <AboutMe />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;