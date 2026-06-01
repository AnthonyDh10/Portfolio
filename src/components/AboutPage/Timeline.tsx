import styles from './Timeline.module.css';
import ESEOLogo from '../../assets/ESEO-logo-couleur-positif.png';

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
    period: "2022 - 2023",
    title: "Stage Développeur Web",
    description: "Startup Alpha. Création d'un intranet et d'outils internes.",
    logo: "https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaCUyMGxvZ28lMjBhYnN0cmFjdHxlbnwxfHx8fDE3ODAzMTQwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
  return (
    <div className={styles.timeline}>
      {TIMELINE.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === TIMELINE.length - 1;
        const isMain = item.type === "main";

        return (
          <div key={item.id} className={`${styles.item} ${isMain ? styles.mainItem : styles.branchItem}`}>
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