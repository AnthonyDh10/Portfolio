import { motion } from 'framer-motion'; 
import styles from './Hero.module.css';

export function Hero() {
  const easterEggJSON = `{
  "developer": {
    "type": "Full-Stack & Data Scientist",
    "status": "Alternance at CGFL",
    "available_from": "October 2026",
    "favorite_ui_style": "Escaliers de pixels"
  }
}`;

  return (
    <section id="about" className={styles.hero}>
      
      {/* 1. ARRIÈRE-PLAN : Texture de code soumise à la lumière */}
      <div className={styles.codeBackgroundWrapper}>
        <div className={styles.codeLeft}>
          <pre><code>{easterEggJSON}</code></pre>
        </div>
        <div className={styles.codeRight}>
          <pre><code>{easterEggJSON}</code></pre>
        </div>
      </div>

      {/* 2. PREMIER PLAN : Titres centrés (qui peuvent empiéter sur le code) */}
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            Anthony DINH
          </h1>
          
          <h2 className={styles.subtitle}>
            Ingénieur Fullstack
          </h2>
          
          <p className={styles.description}>
            Prêt pour Octobre
          </p>
        </motion.div>
      </div>

    </section>
  );
}