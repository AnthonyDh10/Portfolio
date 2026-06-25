import { useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiDocker,
  SiFlask,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTypescript,
  SiDotnet,
} from 'react-icons/si';
import { FaDatabase, FaGitAlt, FaMicrosoft } from 'react-icons/fa';
import styles from './SkillsCarousel.module.css';
import { Title } from '../Title/Title';
import { Card } from '../Card/Card';

type Category = 'Dév Web' | 'Data Science' | 'Outils';

type Skill = {
  name: string;
  category: Category;
  Icon: IconType;
};

const skills: Skill[] = [
  // Dév Web
  { name: 'React', category: 'Dév Web', Icon: SiReact },
  { name: 'TypeScript', category: 'Dév Web', Icon: SiTypescript },
  { name: 'Flask', category: 'Dév Web', Icon: SiFlask },
  { name: 'ASP .NET', category: 'Dév Web', Icon: SiDotnet },

  // Data Science
  { name: 'Python', category: 'Data Science', Icon: SiPython },
  { name: 'NumPy', category: 'Data Science', Icon: SiNumpy },
  { name: 'Pandas', category: 'Data Science', Icon: SiPandas },
  { name: 'Scikit-learn', category: 'Data Science', Icon: SiScikitlearn },
  { name: 'PyTorch', category: 'Data Science', Icon: SiPytorch },

  // Outils
  { name: 'Git', category: 'Outils', Icon: FaGitAlt },
  { name: 'Azure DevOps', category: 'Outils', Icon: FaMicrosoft },
  { name: 'Docker', category: 'Outils', Icon: SiDocker },
  { name: 'MongoDB', category: 'Outils', Icon: SiMongodb },
  { name: 'SQL', category: 'Outils', Icon: FaDatabase },
];

const categories: Category[] = ['Dév Web', 'Data Science', 'Outils'];

export function SkillsCarousel() {
  const [activeTab, setActiveTab] = useState<Category>('Dév Web');

  // Filtre les compétences selon l'onglet actif
  const displayedSkills = skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <div className={styles.inner}>
        <Title as="h3" id="skills-title" className={styles.sectionTitle}>
          Les outils que j'utilise le plus
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