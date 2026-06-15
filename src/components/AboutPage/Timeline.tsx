import { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.css';
import ESEOLogo from '../../assets/ESEO-logo-couleur-positif.png';
import MTULogo from '../../assets/MTU-logo.jpg';
import CGFLLogo from '../../assets/CGFL-logo.svg';
import ICMUBLogo from '../../assets/ICMUB-logo.jpg';
import UBELogo from '../../assets/UBE-logo.png';
import { Title } from '../Title/Title';

type TimelineItem = {
  id: number;
  type: "main" | "branch";
  period: string;
  title: string;
  description: string;
  bgColor?: string;
  logo: string;
};

const TIMELINE: TimelineItem[] = [
  // ... (Ton tableau TIMELINE reste exactement le même)
  {
    id: 1,
    type: "main",
    period: "2020 - 2026",
    title: "école supérieur d'électronique de l'ouest, Dijon",
    description: "Formation ingénieur généraliste",
    logo: ESEOLogo,
    bgColor: "var(--white)"
  },
  {
    id: 2,
    type: "branch",
    period: "Janvier 2021 - Mai 2021",
    title: "Semestre international à la Munster Technological University à Cork, Irlande",
    description: "Informatique, Réseaux, Linux",
    logo: MTULogo,
    bgColor: "var(--white)"
  },
  {
    id: 3,
    type: "branch",
    period: "2024 - 2026",
    title: "Stage technique à l'ICMUB (Institut de Chimie Moléculaire de l'Université de Bourgogne)",
    description: "Optimisation de 40% de la vitesse d'exécution d'une bibliothèque de calcul de homologie persitente en C++.",
    logo: ICMUBLogo,
    bgColor: "var(--white)"
  },
  {
    id: 4,
    type: "branch",
    period: "SEPTEMBRE 2025 - SEPTEMBRE 2026",
    title: "Diplôme universitaire Intelligence Artificielle en Santé",
    description: "Formation sur les applications de l'IA en santé, éthique et réglementation.",
    logo: UBELogo,
    bgColor: "var(--white)"
  },
  {
    id: 5,
    type: "branch",
    period: "SEPTEMBRE 2025 - SEPTEMBRE 2026",
    title: "Contrat de professionnalisation au CGFL",
    description: "Développement d'un atlas de scanners CT pour un parcours de radiothérapie sans simulation.",
    logo: CGFLLogo,
    bgColor: "var(--white)"
  },
  {
    id: 6,
    type: "main",
    period: "2026",
    title: "Diplômation et disponibilité",
    description: "",
    logo: ESEOLogo,
    bgColor: "var(--white)"
  }
];

export function Timeline() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Nouvelles références pour la ligne globale
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const CTA_ID = 99;

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestId: number | null = null;
      let minDistance = Infinity;

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = Number(el.getAttribute('data-id'));
        }
      });

      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        closestId = CTA_ID;
      }

      setActiveId(closestId);

      if (trackRef.current && progressRef.current) {
        const trackRect = trackRef.current.getBoundingClientRect();
        const fillAmount = viewportCenter - trackRect.top;
        const percentage = Math.max(0, Math.min(100, (fillAmount / trackRect.height) * 100));
        
        progressRef.current.style.height = `${percentage}%`;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleMarkerClick = (index: number) => {
    const element = itemRefs.current[index];
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div className={styles.timeline}>
      <Title as="h1" id="timeline-title">Mon parcours</Title>
      
      {/* Container relatif spécifique pour la liste des événements */}
      <div className={styles.timelineList}>
        
        {/* La nouvelle piste de remplissage */}
        <div className={styles.lineTrack} ref={trackRef}>
          <div className={styles.lineFill} ref={progressRef} />
        </div>

        {TIMELINE.map((item, index) => {
          const isMain = item.type === "main";
          const isActive = activeId === item.id;

          return (
            <div 
              key={item.id} 
              data-id={item.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`${styles.item} ${isMain ? styles.mainItem : styles.branchItem} ${isActive ? styles.active : ''}`}
            >
              {/* L'ancienne .verticalLine segmentée a été supprimée d'ici */}

              <div 
                className={`${styles.marker} ${isMain ? styles.markerMain : styles.markerBranch}`}
                onClick={() => handleMarkerClick(index)}
                role="button"
                tabIndex={0}
                aria-label={`Centrer l'événement ${item.title}`}
              >
                <img 
                  src={item.logo} 
                  alt={item.title} 
                  style={{ backgroundColor: item.bgColor }}
                  loading="lazy"
                  className={styles.markerImage}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Logo';
                  }}
                />
              </div>

              <div className={`${styles.content} ${isMain ? styles.contentMain : styles.contentBranch}`}>
                 <div className={styles.period}>
                   {item.period}
                 </div>
                 <Title as="h3">{item.title}</Title>
                 <p className={styles.description}>
                   {item.description}
                 </p>
              </div>
            </div>
          );
        })}
      </div>

      <div 
        className={`${styles.finalItem} ${activeId === CTA_ID ? styles.ctaVisible : ''}`}
        data-id={CTA_ID}
        ref={(el) => { itemRefs.current[TIMELINE.length] = el; }} 
      >
        <div className={`${styles.finalDashedLine} ${activeId === CTA_ID ? styles.dashedLineActive : ''}`} />
        <div className={styles.finalContent}>
            <Title as="h3" className={styles.finalTitle}>
              <span className={styles.questionSlide}>
                INGÉNIEUR INFORMATIQUE CHEZ VOUS ?
              </span>
            </Title>
          </div>
      </div>
    </div>
  );
}