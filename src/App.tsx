import './App.css';
import './index.css';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';
import { SkillsCarousel } from './components/SkillsCarousel/SkillsCarousel';

function App() {
  return (
    <>
      <div id="custom-cursor"></div>
      <NavBar />
      <main className="app-container">
        <Hero />
        <SkillsCarousel />
      </main>
    </>
  );
}

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Mise à jour de la position pour le curseur et la direction de l'ombre
  document.documentElement.style.setProperty("--mouse-x", `${x}px`);
  document.documentElement.style.setProperty("--mouse-y", `${y}px`);

  // --- NOUVEAU : Calcul de la proximité ---
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  
  // Calcule la distance (hypoténuse) entre la souris et le centre
  const distance = Math.hypot(x - centerX, y - centerY);

  // Définit le rayon d'action de la lumière (en pixels). 
  // Modifie cette valeur pour que la lumière porte plus ou moins loin.
  const lightRadius = 400; 

  // Calcule une intensité entre 0 (loin) et 1 (proche)
  let intensity = 1 - (distance / lightRadius);
  if (intensity < 0) intensity = 0; // Empêche d'avoir des valeurs négatives

  // Envoie l'intensité au CSS
  document.documentElement.style.setProperty("--shadow-intensity", `${intensity}`);
});


export default App;