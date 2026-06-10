import styles from './ProjectsSection.module.css';
import React from 'react';
import { useState } from 'react';

// Imports des assets
import CT from '../../assets/ct.png';
import CTMask from '../../assets/ct-mask.png';
import analysisIcon from '../../assets/analysis-icon.png';
import pokeballGif from '../../assets/pokéball_shaking.gif';
import pokeball from '../../assets/pokéball.png';

// Imports des composants
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { Phone } from './Phone';

type ProjectImage = {
  src: string;
  style?: React.CSSProperties;
  hoverSrc?: string;
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
  link?: string; 
  has3DPhone?: boolean;
  phoneStyle?: React.CSSProperties;
};

const projectsData: ProjectData[] = [
  { 
    id: 1, 
    title: 'Développement d\'un atlas de CT', 
    stack: 'Python, Imagerie médicale, Analyse de données', 
    isLarge: true,
    text: 'Pipeline de traitement d\'images : pré-traitements scanners CT, segmentation, resampling, extraction de caractéristiques, harmonisation ComBat, analyse de données et clustering.',
    baseVisual: CT,
    overlayVisual: CTMask,
    iconVisual: analysisIcon,
    link: '/projects/atlas',
  },
  { 
    id: 2, 
    title: 'PokéMini Games', 
    stack: 'React, .NET 8, API REST, Vercel, Render',
    text: 'Plateforme de mini-jeux basée sur les données de PokéAPI et structurée en architecture N-tiers. Interface rétro et intégration d\'un pipeline CI/CD sur Vercel (Front-end) et Render (Back-end).',
    link : 'https://github.com/AnthonyDh10/PokeGames/tree/main',
    images: [
      {
        src: pokeball,
        hoverSrc: pokeballGif, 
        style: { float: 'left', width: '144px', marginRight: '16px', marginBottom: '0px' }
      }
    ]
  },
  { 
    id: 3, 
    title: 'LaForge', 
    stack: 'Flask, SQLite',
    text: 'Application mobile personnelle de gestion de séances de musculation, avec suivi de progression et recommandations personnalisées pour la surcharge progressive à partir des données des séances effectuées.',
    has3DPhone: true,
    phoneStyle: { float: 'right', marginLeft: '16px', marginBottom: '-6px' },
  },
];

export function ProjectsSection() {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

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
              onMouseEnter={() => setHoveredCardId(project.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              {/* RETRAIT du aria-hidden="true" ici pour l'accessibilité */}
              <div className={styles.visualPlaceholder}>
                
                {project.baseVisual && (
                  <div className={styles.illustrationContainer} aria-hidden="true">
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
                  {/* Images et Téléphone en float DOIVENT être placés avant le texte dans le DOM */}
                  {!project.baseVisual && project.images && project.images.map((img, index) => (
                    <img 
                      key={index} 
                      src={hoveredCardId === project.id && img.hoverSrc ? img.hoverSrc : img.src} 
                      alt={`Visuel ${index + 1} du ${project.title}`}
                      className={styles.popOutImage} 
                      style={img.style}
                    />
                  ))}

                  {project.has3DPhone && (
                    <Phone 
                      style={project.phoneStyle}
                      className={styles.projectPhonePopOut}
                    />
                  )}
                  
                  <Title as="h4" className={styles.cardTitle}>
                    {project.title}
                  </Title>                
                  <p className={styles.cardStack}>{project.stack}</p>
                  
                  {/* --- La description est maintenant ICI, dans le même conteneur --- */}
                  <p className={styles.cardDescription}>{project.text}</p>
                  
                  {project.link && (
                    <Button 
                      href={project.link}
                      aria-label={`Ouvrir les détails du projet ${project.title}`}
                      className={styles.cardButton}
                    >
                      Voir plus
                    </Button>
                  )}    
                </div>

              </div>
              {/* La div .cardBody a été complètement retirée */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}