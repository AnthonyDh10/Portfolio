import { motion } from 'framer-motion'; 
import styles from './Hero.module.css';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

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
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                Anthony DINH
              </h1>

              <h2 className={styles.subtitle}>
                Ingénieur Fullstack
              </h2>
              
              <div className={styles.actionRow}>
                <p className={styles.description}>
                  Disponible dès Octobre 2026.
                </p>
                <Button href="/about" className={styles.profileButton}>
                  voir mon profil
                </Button>
              </div>
            </div>

          </Card>
        </motion.div>
      </div>

    </section>
  );
}