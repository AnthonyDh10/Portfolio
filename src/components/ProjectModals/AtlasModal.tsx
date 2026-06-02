import styles from './AtlasModal.module.css';
import type { ProjectData } from '../ProjectsSection/ProjectsSection';

type ProjectModalProps = {
  project: ProjectData;
  onClose: () => void;
};

export function AtlasModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* Empêche le clic à l'intérieur de la modal de fermer la fenêtre */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        <header className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <button className={styles.closeButton} onClick={onClose} aria-label="Fermer">
            &times;
          </button>
        </header>

        <p className={styles.stack}>{project.stack}</p>
        
        <div className={styles.content}>
          <p>{project.text}</p>
          <p>
            Ici, tu pourras ajouter une description plus longue spécifique à la pop-up, 
            des liens vers GitHub, ou un carrousel d'images !
          </p>
        </div>

      </div>
    </div>
  );
}