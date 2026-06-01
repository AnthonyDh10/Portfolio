import { FaEnvelope, FaFileAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Timeline } from "./Timeline"; 
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <section className={styles.page}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.portraitFrame}>
            <img 
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGRhcmt8ZW58MXx8fHwxNzgwMzEzNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Portrait d'Anthony Dinh" 
              loading="lazy"
              className={styles.portraitImage}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/200?text=Portrait';
              }}
            />
          </div>

          <div>
            <h1 className={styles.name}>
              Anthony Dinh
            </h1>
            <h2 className={styles.role}>
              Ingénieur Full-Stack <br /> 
              Data Scientist
            </h2>
          </div>

          <p className={styles.description}>
            Disponible pour une opportunité à temps plein dès octobre 2026.
          </p>

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