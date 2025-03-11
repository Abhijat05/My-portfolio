import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const MatrixRain = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (theme !== 'matrix') return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Characters to display (mix of Matrix-like symbols)
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789</>{}";
    
    // Initialize drops at random positions
    const drops = Array(Math.floor(columns)).fill().map(() => Math.floor(-Math.random() * 100));
    
    // Animation frame ID for cleanup
    let animationId;
    
    const draw = () => {
      // Semi-transparent black overlay to show trail effect
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.fillStyle = "#4ADE80"; // Green color like Matrix theme
      context.font = `${fontSize}px monospace`;
      
      // Loop over each column and draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        context.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop position when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
      
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    
    // Resize handler
    const handleResize = () => {
      cancelAnimationFrame(animationId);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);
  
  if (theme !== 'matrix') return null;
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] opacity-40"
    />
  );
};

export default MatrixRain;