import { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.css';
import ESEOLogo from '../../assets/ESEO-logo-couleur-positif.png';
import MTULogo from '../../assets/MTU-Logo.jpg';
import CGFLLogo from '../../assets/CGFL-Logo.svg';
import ICMUBLogo from '../../assets/ICMUB-Logo.jpg';
import UBELogo from '../../assets/UBE-Logo.png';
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
  {
    id: 1,
    type: "main",
    period: "2020 - 2026",
    title: "ESEO, grande école d'ingénieur",
    description: "Formation ingénieur généraliste",
    logo: ESEOLogo,
    bgColor: "#FFFFFF"
  },
  {
    id: 2,
    type: "branch",
    period: "Janvier 2021 - Mai 2021",
    title: "Semestre international à la Munster Technological University à Cork, Irlande",
    description: "Informatique, Réseaux, Linux",
    logo: MTULogo,
    bgColor: "#FFFFFF"
  },
  {
    id: 3,
    type: "main",
    period: "2024 - 2026",
    title: "Stage technique à l'ICMUB (Institut de Chimie Moléculaire de l'Université de Bourgogne)",
    description: "Optimisation de 40% de la vitesse d'exécution d'une bibliothèque de calcul de homologie persitente en C++.",
    logo: ICMUBLogo,
    bgColor: "#FFFFFF"
  },
  {
    id: 4,
    type: "branch",
    period: "SEPTEMBRE 2025 - SEPTEMBRE 2026",
    title: "Diplôme universitaire Intelligence Artificielle en Santé",
    description: "Formation sur les applications de l'IA en santé, éthique et réglementation.",
    logo: UBELogo,
    bgColor: "#FFFFFF"
  },
  {
    id: 5,
    type: "main",
    period: "SEPTEMBRE 2025 - SEPTEMBRE 2026",
    title: "Contrat de professionnalisation au CGFL",
    description: "Développement d'un atlas de scanners CT pour un parcours de radiothérapie sans simulation.",
    logo: CGFLLogo,
    bgColor: "#FFFFFF"
  }
];

export function Timeline() {
  // On stocke désormais un seul ID (ou null) au lieu d'un tableau
  const [activeId, setActiveId] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Calcule le centre exact de la fenêtre
      const viewportCenter = window.innerHeight / 2;
      let closestId: number | null = null;
      let minDistance = Infinity;

      itemRefs.current.forEach((el) => {
        if (!el) return;
        
        // Récupère la position de l'élément par rapport à l'écran
        const rect = el.getBoundingClientRect();
        // Calcule le centre de cet élément
        const elCenter = rect.top + rect.height / 2;
        // Calcule la distance absolue entre le centre de l'élément et le centre de l'écran
        const distance = Math.abs(viewportCenter - elCenter);

        // Si cette distance est la plus petite trouvée jusqu'à présent, on met à jour l'ID
        if (distance < minDistance) {
          minDistance = distance;
          closestId = Number(el.getAttribute('data-id'));
        }
      });

      // React ignorera la mise à jour si l'ID est identique au précédent (évite les re-rendus inutiles)
      setActiveId(closestId);
    };

    // Exécuter une fois au montage pour initialiser le premier élément
    handleScroll();

    // Ajouter les écouteurs d'événements (passive: true optimise les performances du scroll)
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
        behavior: 'smooth', // Défilement fluide
        block: 'center',    // Aligne l'élément au centre de l'écran
      });
    }
  };

return (
    <div className={styles.timeline}>
      {TIMELINE.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === TIMELINE.length - 1;
        const isMain = item.type === "main";
        const isActive = activeId === item.id;

        return (
          <div 
            key={item.id} 
            data-id={item.id}
            ref={(el) => { itemRefs.current[index] = el; }}
            className={`${styles.item} ${isMain ? styles.mainItem : styles.branchItem} ${isActive ? styles.active : ''}`}
          >
            <div 
              className={styles.verticalLine}
              style={{
                top: isFirst ? '50%' : '0',
                bottom: isLast ? '50%' : '0'
              }}
            />

            {!isMain && (
              <svg
                className={styles.branchPath}
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 0 0 C 0 20, 100 20, 100 40 L 100 60 C 100 80, 0 80, 0 100"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  className={styles.branchStroke}
                />
              </svg>
            )}

            {/* Événement onClick sur le marqueur */}
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
  );
}