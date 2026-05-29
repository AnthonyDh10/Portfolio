import { motion } from 'framer-motion'; 
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="about" className={styles.hero}>
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