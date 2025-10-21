import React, { useState } from 'react';
import { MessageCircle, Github, Linkedin, Mail, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: 'mailto:adodohabro@gmail.com',
      color: '#00E0FF'
    },
    {
      icon: <Phone size={20} />,
      label: '06 99 59 23 67',
      href: 'tel:+33699592367',
      color: '#7A5AF8'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/ASapAbro',
      color: '#00E0FF'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/abraham-adodoh',
      color: '#7A5AF8'
    }
  ];

  return (
    <div className="floating-contact">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-options"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 500,
              staggerChildren: 0.1 
            }}
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.href}
                className="contact-option"
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  x: -10,
                  boxShadow: `0 0 20px ${option.color}50`
                }}
                whileTap={{ scale: 0.95 }}
              >
                {option.icon}
                <span>{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="contact-main-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ 
          scale: 1.1, 
          rotate: isOpen ? 180 : 360,
          boxShadow: "0 0 40px rgba(0, 224, 255, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 300 
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingContact;
