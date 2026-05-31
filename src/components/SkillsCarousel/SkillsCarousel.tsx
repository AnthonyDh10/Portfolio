import {
  SiCplusplus,
  SiDocker,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { FaDatabase, FaMicrosoft } from 'react-icons/fa';
import type { ComponentType } from 'react';
import styles from './SkillsCarousel.module.css';

type Skill = {
  name: string;
  Icon: ComponentType<{ className?: string }>;
};

const skills: Skill[] = [
  { name: 'Python', Icon: SiPython },
  { name: 'React', Icon: SiReact },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'SQL', Icon: FaDatabase },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Azure DevOps', Icon: FaMicrosoft },
];

export function SkillsCarousel() {
  const loopedSkills = [...skills, ...skills];

  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <div className={styles.inner}>
        <h3 id="skills-title" className={styles.title}>
          Competences
        </h3>

        <div className={styles.viewport} aria-label="Carousel des competences">
          <div className={styles.track}>
            {loopedSkills.map(({ name, Icon }, index) => (
              <article
                className={styles.card}
                key={`${name}-${index}`}
                aria-label={`Competence ${name}`}
              >
                <Icon className={styles.icon} />
                <span className={styles.label}>{name}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}