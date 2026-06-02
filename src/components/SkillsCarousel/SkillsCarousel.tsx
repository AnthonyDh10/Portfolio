import { useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiCplusplus,
  SiDocker,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiReact,
  SiTypescript,
  SiDotnet,
  SiFlutter
} from 'react-icons/si';
import { FaDatabase, FaMicrosoft } from 'react-icons/fa';
import styles from './SkillsCarousel.module.css';
import { Title } from '../Title/Title';
import { Card } from '../Card/Card';

type Category = 'Front-End' | 'Back-End' | 'Outils & DevOps';

type Skill = {
  name: string;
  category: Category;
  Icon: IconType;
};

const skills: Skill[] = [
  // Front-End
  { name: 'React', category: 'Front-End', Icon: SiReact },
  { name: 'TypeScript', category: 'Front-End', Icon: SiTypescript },
  { name: 'JavaScript', category: 'Front-End', Icon: SiJavascript },
  { name: 'Flutter', category: 'Front-End', Icon: SiFlutter },
  
  // Back-End
  { name: 'Python', category: 'Back-End', Icon: SiPython },
  { name: '.NET', category: 'Back-End', Icon: SiDotnet },
  { name: 'C++', category: 'Back-End', Icon: SiCplusplus },
  { name: 'MongoDB', category: 'Back-End', Icon: SiMongodb },
  { name: 'SQL', category: 'Back-End', Icon: FaDatabase },
  
  // Outils & DevOps
  { name: 'GitHub', category: 'Outils & DevOps', Icon: SiGithub },
  { name: 'Docker', category: 'Outils & DevOps', Icon: SiDocker },
  { name: 'Azure DevOps', category: 'Outils & DevOps', Icon: FaMicrosoft },
];

const categories: Category[] = ['Front-End', 'Back-End', 'Outils & DevOps'];

export function SkillsCarousel() {
  const [activeTab, setActiveTab] = useState<Category>('Front-End');

  // Filtre les compétences selon l'onglet actif
  const displayedSkills = skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <div className={styles.inner}>
        <Title as="h3" id="skills-title" className={styles.sectionTitle}>
          Inventaire
        </Title>

        <div className={styles.inventoryWrapper}>
          {/* Les Onglets */}
          <div className={styles.tabsContainer} role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeTab === category}
                className={`${styles.tabButton} ${activeTab === category ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* L'écran principal de l'inventaire */}
          <Card className={styles.inventoryScreen}>
            <div className={styles.grid}>
              {displayedSkills.map(({ name, Icon }) => (
                <article key={name} className={styles.skillCard} aria-label={`Compétence ${name}`}>
                  <div className={styles.iconWrap}>
                    <Icon />
                  </div>
                  <span className={styles.label}>{name}</span>
                </article>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}