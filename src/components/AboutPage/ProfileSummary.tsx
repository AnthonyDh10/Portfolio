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
            <p className={styles.sub}>Ingénieur Informatique ESEO</p>
          </div>
        </div>
        <div className={styles.extra}>
          <p>
            Disponible pour un poste d'ingénieur informatique dans le domaine de la santé. 
            <br/> Mobile en France.
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
            Option e-santé à ESEO <br/>
            Plusieurs projets et travaux menés aux côtés de professionnels de santé : stage,
            contrat pro, projets d'école.
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
            Vous pourrez me retrouver devant un écran, la salle de sport ou en pleine nature. <br/>
            <br/>
            Mes projets perso sont souvent liés à mes passions, quoi de mieux que de travailler sur des projets qui nous tiennent à cœur ?
          </p>
        </div>
        <span className={styles.hint} aria-hidden="true"><FaExpandAlt /></span>
      </div>

    </div>
  );
}