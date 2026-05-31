import styles from './ProjectsSection.module.css';

type PlaceholderProject = {
  id: number;
  title: string;
  stack: string;
};

const placeholderProjects: PlaceholderProject[] = [
  { id: 1, title: 'Projet 01', stack: 'Stack a definir' },
  { id: 2, title: 'Projet 02', stack: 'Stack a definir' },
  { id: 3, title: 'Projet 03', stack: 'Stack a definir' },
  { id: 4, title: 'Projet 04', stack: 'Stack a definir' },
];

export function ProjectsSection() {
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
          {placeholderProjects.map((project) => (
            <article className={styles.card} key={project.id} aria-label={`Placeholder ${project.title}`}>
              <div className={styles.visualPlaceholder} aria-hidden="true">
                <span className={styles.visualLabel}>Placeholder</span>
              </div>

              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{project.title}</h4>
                <p className={styles.cardStack}>{project.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
