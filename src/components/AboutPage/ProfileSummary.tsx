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
    // Intro auto-jouée réservée au desktop : pas d'effet sur le rendu mobile.
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
            Recherche un <strong>stage de fin d'études</strong> (6 mois), puis ouvert à un
            premier poste. Mobile sur la France, télétravail partiel apprécié.
          </p>
        </div>
        <span className={styles.hint} aria-hidden="true"><FaExpandAlt /></span>
      </div>

      <div className={styles.cell}>
        <div className={styles.main}>
          <Title as="h3" className={styles.cellTitle}>Domaine de prédilection</Title>
          <div className={styles.body}>
            <span className={styles.cellIcon}><FaHeartbeat /></span>
            <strong className={styles.highlight}>La santé</strong>
            <p className={styles.sub}>
              Transformer les besoins des professionnels du milieu en solutions concrètes.
            </p>
          </div>
        </div>
        <div className={styles.extra}>
          <p>
            <strong>E-santé, dispositifs médicaux et suivi patient.</strong> J'aime concevoir
            des outils data qui simplifient le quotidien des soignants et fiabilisent le suivi
            des patients.
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
              Jeux vidéo · Musculation · Randonnée — et je développe mes propres apps de suivi.
            </p>
          </div>
        </div>
        <div className={styles.extra}>
          <p>
            <strong>RPG &amp; jeux de stratégie</strong>, <strong>musculation</strong> 4×/semaine
            et <strong>randonnée</strong> en montagne. Je transforme mes passions en projets :
            apps de suivi sportif et de nutrition.
          </p>
        </div>
        <span className={styles.hint} aria-hidden="true"><FaExpandAlt /></span>
      </div>

    </div>
  );
}
