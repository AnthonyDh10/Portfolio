import styles from './ProjectsSection.module.css';
import React from 'react';

// Imports des assets
import ESEOLogo from '../../assets/ESEO-logo-couleur-positif.png';
import CT from '../../assets/ct.png';
import CTMask from '../../assets/ct-mask.png';
import analysisIcon from '../../assets/analysis-icon.png';

// Imports des composants
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

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
  baseVisual?: string;
  overlayVisual?: string;
  iconVisual?: string;
};

const projectsData: ProjectData[] = [
  { 
    id: 1, 
    title: 'Développement d\'un atlas de scanners pour l\'optimisation du parcours de radiothérapie.', 
    stack: 'Python, Imagerie médicale, Analyse de données', 
    isLarge: true,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    baseVisual: CT,
    overlayVisual: CTMask,
    iconVisual: analysisIcon
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
          <Title as="h3" id="projects-title">Quelques projets</Title>
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
                
                {project.baseVisual && (
                  <div className={styles.illustrationContainer}>
                    <div className={styles.scannerWrapper}>
                      <img src={project.baseVisual} className={styles.scannerBase} alt="Coupe CT brute" />
                      {project.overlayVisual && (
                        <img src={project.overlayVisual} className={styles.scannerOverlay} alt="Coupe CT avec masque" />
                      )}
                    </div>
                    {project.iconVisual && (
                      <div className={styles.iconWrapper}>
                        <img src={project.iconVisual} alt="Icône d'analyse" />
                      </div>
                    )}
                  </div>
                )}

                <div className={styles.visualText}>
                  {!project.baseVisual && project.images && project.images.map((img, index) => (
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