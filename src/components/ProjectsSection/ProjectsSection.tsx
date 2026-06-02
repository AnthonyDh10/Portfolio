import styles from './ProjectsSection.module.css';
import React from 'react';
import ESEOLogo from '../../assets/ESEO-logo-couleur-positif.png';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

type ProjectImage = {
  src: string;
  style?: React.CSSProperties;
};

export type ProjectData = {
  id: number;
  title: string;
  stack: string;
  isLarge?: boolean;
  text: string;
  images?: ProjectImage[];
  imageStyle?: React.CSSProperties; 
};

const projectsData: ProjectData[] = [
  { 
    id: 1, 
    title: 'Développement d\'un atlas de scanners pour l\'optimisation du parcours de radiothérapie.', 
    stack: 'Python, Imagerie médicale, Analyse de données', 
    isLarge: true,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    images: [
      { 
        src: ESEOLogo, 
        // Première image : En haut à droite
        style: { float: 'right', width: '120px', marginLeft: '22px', marginBottom: '11px' } 
      },
      { 
        src: ESEOLogo, 
        // Deuxième image : Plus bas, à gauche
        style: { float: 'left', width: '80px', marginRight: '22px', marginTop: '40px' } 
      }
    ]
  },
  { 
    id: 2, 
    title: 'Projet 02', 
    stack: 'Stack a definir',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    images: [
      { 
        src: ESEOLogo, 
        style: { float: 'left', width: '90px', marginRight: '16px', marginBottom: '11px' } 
      }
    ]
  },
  { 
    id: 3, 
    title: 'Projet 03', 
    stack: 'Stack a definir',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  },
];

export function ProjectsSection() {
  const handleAtlasClick = () => {
    window.location.pathname = '/projects/atlas';
  };

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h3 id="projects-title" className={styles.title}>
            Projets
          </h3>
          <p className={styles.description}>Sections reservees pour vos prochains projets.</p>
        </header>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <Card 
              className={`${styles.card} ${project.isLarge ? styles.cardLarge : ''}`}
              key={project.id}
              aria-label={`Projet ${project.title}`}
              style={{ padding: 0, overflow: 'visible' }}
            >
              <div className={styles.visualPlaceholder} aria-hidden="true">
                
                {/* TEXTE ET IMAGE REGROUPÉS */}
                <div className={styles.visualText}>
                  
                {project.images && project.images.map((img, index) => (
                    <img 
                      key={index} 
                      src={img.src} 
                      alt={`Visuel ${index + 1} du ${project.title}`}
                      className={styles.popOutImage} 
                      style={img.style}
                    />
                  ))}
                  
                  <p>{project.text}</p>
                </div>
                
              </div>

              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{project.title}</h4>
                <p className={styles.cardStack}>{project.stack}</p>
                {project.id === 1 && (
                  <Button 
                    onClick={handleAtlasClick}
                    aria-label={`Ouvrir les détails du projet ${project.title}`}
                    className={styles.cardButton}
                  >
                    Voir plus
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}