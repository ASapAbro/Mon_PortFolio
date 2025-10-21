import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Basculer le thème">
      {isDark ? (
        <>
          <Sun className="icon" />
          <span>Clair</span>
        </>
      ) : (
        <>
          <Moon className="icon" />
          <span>Sombre</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
