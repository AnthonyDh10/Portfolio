import { useEffect, useState } from 'react';
import {
  FaGamepad,
  FaDumbbell,
  FaMountain,
  FaHeartbeat,
  FaCalendarAlt,
  FaExpandAlt,
} from 'react-icons/fa';
import { Title } from '../Title/Title';
import styles from './ProfileSummary.module.css';

export function ProfileSummary() {
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(min-width: 481px)').matches) return;

    const expand = setTimeout(() => setIntro(true), 500);
    const collapse = setTimeout(() => setIntro(false), 2400);
    return () => {
      clearTimeout(expand);
      clearTimeout(collapse);
    };
  }, []);

  return (
    <div className={`${styles.grid} ${intro ? styles.intro : ''}`}>

      <div className={styles.cell}>
        <div className={styles.main}>
          <Title as="h3" className={styles.cellTitle}>Disponibilité</Title>
          <div className={styles.body}>
            <span className={styles.cellIcon}><FaCalendarAlt /></span>
            <strong className={styles.highlight}>Octobre 2026</strong>
            <p className={styles.sub}>Ingénieur ESEO — Développement &amp; Data Science</p>
          </div>
        </div>
        <div className={styles.extra}>
          <p>
            Disponible pour un poste d'ingénieur en développement ou data science. Mobile en France.
          </p>
        </div>
        <span className={styles.hint} aria-hidden="true"><FaExpandAlt /></span>
      </div>

      <div className={styles.cell}>
        <div className={styles.main}>
          <Title as="h3" className={styles.cellTitle}>Domaine de prédilection</Title>
          <div className={styles.body}>
            <span className={styles.cellIcon}><FaHeartbeat /></span>
            <strong className={styles.highlight}>e-santé</strong>
            <p className={styles.sub}>
              Traduire les problématiques médicales en solutions logicielles concrètes.
            </p>
          </div>
        </div>
        <div className={styles.extra}>
          <p>
            Plusieurs projets et travaux menés aux côtés de professionnels de santé — stage,
            contrat pro, projet d'école — avec une option e-santé à l'ESEO.
          </p>
        </div>
        <span className={styles.hint} aria-hidden="true"><FaExpandAlt /></span>
      </div>

      <div className={styles.cell}>
        <div className={styles.main}>
          <Title as="h3" className={styles.cellTitle}>Passions</Title>
          <div className={styles.body}>
            <div className={styles.icons}>
              <FaGamepad />
              <FaDumbbell />
              <FaMountain />
            </div>
            <p className={styles.sub}>
              Jeux vidéo · Musculation · Randonnée
            </p>
          </div>
        </div>
        <div className={styles.extra}>
          <p>
            Je construis des outils pour mes propres pratiques — les meilleurs projets naissent d'un besoin réel.
          </p>
        </div>
        <span className={styles.hint} aria-hidden="true"><FaExpandAlt /></span>
      </div>

    </div>
  );
}