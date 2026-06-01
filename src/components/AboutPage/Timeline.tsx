import { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.css';
import ESEOLogo from '../../assets/ESEO-logo-couleur-positif.png';
import MTULogo from '../../assets/MTU-Logo.jpg';
import CGFLLogo from '../../assets/CGFL-Logo.svg';
import ICMUBLogo from '../../assets/ICMUB-Logo.jpg';
import UBELogo from '../../assets/UBE-Logo.png';

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
    type: "branch",
    period: "2024 - 2026",
    title: "Alternance Fullstack",
    description: "Tech Agency. Développement d'applications web React & Node.js.",
    logo: "https://images.unsplash.com/photo-1759390304277-df4f95509186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHNoYXBlJTIwbG9nb3xlbnwxfHx8fDE3ODAzMTQwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    type: "main",
    period: "2026",
    title: "Obtention du diplôme d'Ingénieur",
    description: "Spécialité Ingénierie Logicielle et Data",
    logo: "https://images.unsplash.com/photo-1597418895783-f7de85be2839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwdHlwb2dyYXBoeSUyMGxvZ298ZW58MXx8fHwxNzgwMzE0MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
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

  return (
    <div className={styles.timeline}>
      {TIMELINE.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === TIMELINE.length - 1;
        const isMain = item.type === "main";
        
        // L'élément est actif seulement si son ID correspond au plus proche du centre
        const isActive = activeId === item.id;

        return (
          <div 
            key={item.id} 
            data-id={item.id}
            ref={(el) => (itemRefs.current[index] = el)}
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

            <div 
              className={`${styles.marker} ${isMain ? styles.markerMain : styles.markerBranch}`}
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
               <h3 className={styles.title}>
                 {item.title}
               </h3>
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