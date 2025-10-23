import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  animate?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  animate = true
}) => {
  const imageProps = {
    src,
    alt,
    className: `responsive-image ${className}`,
    width,
    height,
    loading: priority ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const,
    style: {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'cover' as const,
    }
  };

  if (animate) {
    return (
      <motion.img
        {...imageProps}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      />
    );
  }

  return <img {...imageProps} />;
};

export default ResponsiveImage;
