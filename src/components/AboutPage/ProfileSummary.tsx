import { FaGamepad, FaDumbbell, FaMountain, FaHeartbeat, FaCalendarAlt } from 'react-icons/fa';
import styles from './ProfileSummary.module.css';

export function ProfileSummary() {
  return (
    <div className={styles.grid}>

      <div className={styles.cell}>
        <span className={styles.label}>Disponibilité</span>
        <div className={styles.body}>
          <span className={styles.cellIcon}><FaCalendarAlt /></span>
          <strong className={styles.highlight}>Octobre 2026</strong>
          <p className={styles.sub}>Ingénieur ESEO — Développement &amp; Data Science</p>
        </div>
      </div>

      <div className={styles.cell}>
        <span className={styles.label}>Domaine de prédilection</span>
        <div className={styles.body}>
          <span className={styles.cellIcon}><FaHeartbeat /></span>
          <strong className={styles.highlight}>La santé</strong>
          <p className={styles.sub}>
            Transformer les besoins des professionnels du milieu en solutions concrètes.
          </p>
        </div>
      </div>

      <div className={styles.cell}>
        <span className={styles.label}>Passions</span>
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

      <div className={`${styles.cell} ${styles.cellEmpty}`} aria-hidden="true" />

    </div>
  );
}
