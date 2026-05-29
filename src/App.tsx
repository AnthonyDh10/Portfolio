import './App.css';
import './index.css';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <>
      <div id="custom-cursor"></div>
      <NavBar />
      <main className="app-container">
        <Hero />
      </main>
    </>
  );
}

document.addEventListener("mousemove", (e) => {
  // Calcule la position de la souris
  const x = e.clientX;
  const y = e.clientY;

  // Met à jour les variables CSS à la racine du document
  document.documentElement.style.setProperty("--mouse-x", `${x}px`);
  document.documentElement.style.setProperty("--mouse-y", `${y}px`);
});

export default App;