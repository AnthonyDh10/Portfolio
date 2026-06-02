import styles from './AtlasPage.module.css';
import { useEffect } from 'react';
import ESEOLogo from '../../assets/ESEO-logo-couleur-positif.png';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

export function AtlasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    id: 1,
    title: 'Développement d\'un atlas de scanners pour l\'optimisation du parcours de radiothérapie.',
    stack: 'Python, Imagerie médicale, Analyse de données',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Button href="/#projects">← Retour aux projets</Button>
          <Title as="h1">{projectData.title}</Title>
          <p className={styles.stack}>{projectData.stack}</p>
        </header>

        <div className={styles.heroImage}>
          <img src={ESEOLogo} alt="Visuel du projet Atlas" />
        </div>

        <article className={styles.content}>
          <section className={styles.textSection}>
            <h2>À propos du projet</h2>
            <p>{projectData.text}</p>
            <p>
              Ici, tu pourras ajouter une description plus longue spécifique au projet, 
              des liens vers GitHub, une démonstration vidéo, ou un carrousel d'images !
            </p>
          </section>

          <section className={styles.textSection}>
            <h2>Technologies utilisées</h2>
            <ul className={styles.techList}>
              <li>Python pour l'analyse des données</li>
              <li>Traitement d'imagerie médicale</li>
              <li>Optimisation d'algorithmes</li>
              <li>Visualisation des résultats</li>
            </ul>
          </section>

          <section className={styles.textSection}>
            <h2>Résultats et apprentissages</h2>
            <p>
              Ce projet m'a permis d'appliquer mes connaissances en traitement d'image 
              et en analyse de données à un contexte médical réel. Les résultats obtenus 
              ont montré une amélioration significative du parcours de radiothérapie.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
