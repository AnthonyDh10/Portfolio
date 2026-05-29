import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'; 
import styles from './NavBar.module.css';

export function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Ce hook écoute le scroll de manière hyper optimisée
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Si on scrolle vers le bas ET qu'on a dépassé les 100 premiers pixels
    if (latest > previous && latest > 100) {
      setHidden(true); // On cache la navbar
    } else {
      setHidden(false); // On la réaffiche dès qu'on remonte
    }
  });

  return (
    <motion.nav
      // On remplace initial/animate par des variants pour gérer les deux états
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" } // Remonte la navbar au-dessus de l'écran
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={styles.navbarWrapper}
    >
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          AD
        </div>
        
        <div className={styles.navLinks}>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}

export { NavBar as Navbar };
export default NavBar;