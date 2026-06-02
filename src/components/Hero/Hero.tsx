import { motion } from 'framer-motion'; 
import styles from './Hero.module.css';
import { Card } from '../Card/Card';

export function Hero() {
  const easterEggCode = `{
  "developer": {
    "name": "Anthony",
    "level": 22,
    "class": [
      "Full-Stack Developer",
      "Data Scientist"
    ],
    "status": "Alternance at CGFL",
    "available": "October 2026",
  }
}
 
void loop() {
  // Daily routine of a developer
  solveProblems();
  learnNewTech();
  collaborateWithTeam();

    if (energy < 20) {
      drinkCoffee();
    } else {
      drinkCoffee(); //just in case
    }
}



`;

  return (
    <section id="about" className={styles.hero}>
      
      {/* 1. ARRIÈRE-PLAN : Texture de code soumise à la lumière */}
      <div className={styles.codeBackgroundWrapper}>
        <div className={styles.codeLeft}>
          <pre><code>{easterEggCode}</code></pre>
        </div>
        <div className={styles.codeRight}>
          <pre><code>{easterEggCode}</code></pre>
        </div>
      </div>

      {/* 2. PREMIER PLAN : Titres centrés (qui peuvent empiéter sur le code) */}
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className={styles.content}>
            <h1 className={styles.title}>
              Anthony DINH
            </h1>
            
            <h2 className={styles.subtitle}>
              Ingénieur Fullstack
            </h2>
            
            <p className={styles.description}>
              Prêt pour Octobre
            </p>
          </Card>
        </motion.div>
      </div>

    </section>
  );
}