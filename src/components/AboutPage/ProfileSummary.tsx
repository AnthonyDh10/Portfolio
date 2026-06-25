import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';
import styles from './ProfileSummary.module.css';

type SummaryItem = {
  icon: React.ReactNode;
  label: string;
  value: string;
  tags?: string[];
};

const SUMMARY_ITEMS: SummaryItem[] = [
  {
    icon: <FaBriefcase />,
    label: 'Ce que je recherche',
    value: 'Poste en CDI — Ingénieur Full-Stack ou Data Scientist',
    tags: ['Full-Stack', 'Data Science', 'IA / Santé'],
  },
  {
    icon: <FaCalendarAlt />,
    label: 'Disponibilité',
    value: 'Septembre 2026',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Localisation',
    value: 'Dijon — ouvert au remote et aux déplacements',
  },
  {
    icon: <FaFileAlt />,
    label: 'CV',
    value: 'Disponible sur demande',
  },
];

export function ProfileSummary() {
  return (
    <div className={styles.wrapper}>
      {SUMMARY_ITEMS.map((item) => (
        <div key={item.label} className={styles.row}>
          <span className={styles.icon}>{item.icon}</span>
          <div className={styles.content}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
            {item.tags && (
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
