import React from 'react';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Skills />
    </motion.div>
  );
};

export default SkillsPage;