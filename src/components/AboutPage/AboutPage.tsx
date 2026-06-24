import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Timeline } from "./Timeline";
import styles from './AboutPage.module.css';
import { Title } from '../Title/Title';
import { ReturnButton } from '../ReturnButton/ReturnButton';
import moi from '../../assets/moi.png';

export function AboutPage() {
  return (
    <section className={styles.page}>
      <ReturnButton />
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
            <Title as="h1">Anthony Dinh</Title>
            <h2 className={styles.role}>
              Ingénieur Full-Stack <br /> 
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
            <a href="mailto:antho.dh@icloud.com" aria-label="Envoyer un email" className={styles.socialLink}>
              <FaEnvelope size={32} />
            </a>
          </div>
        </aside>

        <div className={styles.timelineColumn}>
          <Timeline />
        </div>
      </div>
    </section>
  );
}