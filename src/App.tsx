import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';
import { SkillsCarousel } from './components/SkillsCarousel/SkillsCarousel';

function App() {
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const updateCursorAvailability = () => {
      setShowCustomCursor(mediaQuery.matches);
    };

    updateCursorAvailability();
    mediaQuery.addEventListener('change', updateCursorAvailability);

    return () => {
      mediaQuery.removeEventListener('change', updateCursorAvailability);
    };
  }, []);

  useEffect(() => {
    if (!showCustomCursor) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update position for custom cursor and shadow direction.
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distance = Math.hypot(x - centerX, y - centerY);
      const lightRadius = 400;

      let intensity = 1 - distance / lightRadius;
      if (intensity < 0) intensity = 0;

      document.documentElement.style.setProperty('--shadow-intensity', `${intensity}`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showCustomCursor]);

  return (
    <>
      {showCustomCursor && <div id="custom-cursor"></div>}
      <NavBar />
      <main className="app-container">
        <Hero />
        <SkillsCarousel />
      </main>
    </>
  );
}

export default App;