import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ContactPage = () => {
  const { theme } = useTheme();
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeSocial, setActiveSocial] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd normally handle the actual form submission
    // For demo purposes we're just simulating success
    setFormStatus({ submitted: true, error: false });
    
    // Reset after showing success message
    setTimeout(() => {
      setFormStatus({ submitted: false, error: false });
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-400 border-green-700' : 'text-green-600 border-green-300'} border-b pb-2 mb-10`}>
        <span className="font-mono">{'<'}</span> Contact <span className="font-mono">{'/'}</span><span className="font-mono">{'>'}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          {/* Contact Form */}
          <motion.form 
            className={`space-y-4 p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-gray-200 border-gray-700' : 'bg-white text-gray-800 border-gray-300'} border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none`}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-gray-200 border-gray-700' : 'bg-white text-gray-800 border-gray-300'} border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none`}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-3 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-gray-200 border-gray-700' : 'bg-white text-gray-800 border-gray-300'} border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none`}
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className={`px-6 py-2 ${theme === 'dark' ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white font-medium rounded-md transition-colors`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
            
            {formStatus.submitted && (
              <motion.div 
                className="text-green-400 text-sm mt-2 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Message sent! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
          
          {/* Social Links with Interactive Highlights */}
          <div className="space-y-6 mt-8">
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              Or connect with me on:
            </h3>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="mailto:your.email@example.com"
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${theme === 'dark' ? 
                  'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                whileHover={{ y: -5, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                onMouseEnter={() => setActiveSocial('email')}
                onMouseLeave={() => setActiveSocial(null)}
              >
                <span className="text-green-400 text-xl">📧</span>
                <span>Email</span>
                {activeSocial === 'email' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`absolute -top-10 left-0 px-2 py-1 rounded text-xs ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    your.email@example.com
                  </motion.div>
                )}
              </motion.a>
              
              <motion.a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${theme === 'dark' ? 
                  'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                whileHover={{ y: -5, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                onMouseEnter={() => setActiveSocial('github')}
                onMouseLeave={() => setActiveSocial(null)}
              >
                <i className="devicon-github-original text-xl"></i>
                <span>GitHub</span>
                {activeSocial === 'github' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`absolute -top-10 left-0 px-2 py-1 rounded text-xs ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    github.com/yourusername
                  </motion.div>
                )}
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${theme === 'dark' ? 
                  'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                whileHover={{ y: -5, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                onMouseEnter={() => setActiveSocial('linkedin')}
                onMouseLeave={() => setActiveSocial(null)}
              >
                <i className="devicon-linkedin-plain text-xl"></i>
                <span>LinkedIn</span>
                {activeSocial === 'linkedin' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`absolute -top-10 left-0 px-2 py-1 rounded text-xs ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    linkedin.com/in/yourusername
                  </motion.div>
                )}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;