import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};

const getInitialTheme = (): Theme => {
  // Le thème est déjà posé sur <html> par le script inline d'index.html (anti-FOUC).
  const attr = document.documentElement.getAttribute('data-theme') as Theme | null;
  if (attr === 'light' || attr === 'dark') {
    return attr;
  }

  const storedTheme = localStorage.getItem('theme') as Theme | null;
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return { theme, toggleTheme };
};
