import {FaLinkedinIn, FaGithub, FaFilePdf } from 'react-icons/fa';
import { Timeline } from "./Timeline";
import { ProfileSummary } from "./ProfileSummary";
import styles from './AboutPage.module.css';
import { Title } from '../Title/Title';
import moi from '../../assets/moi.png';
import cv from '../../assets/CV.pdf';

export function AboutPage() {
  return (
    <section id="about" className={styles.page}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.portraitFrame}>
            <img 
              src={moi} 
              alt="Portrait d'Anthony Dinh" 
              loading="lazy"
              className={styles.portraitImage}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/200?text=Portrait';
              }}
            />
          </div>

          <div>
            <Title as="h2">Anthony Dinh</Title>
            <h2 className={styles.role}>
              Développeur Full-Stack <br /> 
              Data Scientist
            </h2>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/AnthonyDh10" aria-label="Profil GitHub" className={styles.socialLink}>
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/anthony-dinh-eseo/" aria-label="Profil LinkedIn" className={styles.socialLink}>
              <FaLinkedinIn size={32} />
            </a>
            <a href={cv} target="_blank" rel="noopener noreferrer" aria-label="Voir mon CV" className={styles.socialLink}>
              <FaFilePdf size={32} />
            </a>
          </div>
        </aside>

        <div className={styles.timelineColumn}>
          <ProfileSummary />
          <Timeline />
        </div>
      </div>
    </section>
  );
}