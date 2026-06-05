import styles from './AtlasPage.module.css';
import { useEffect } from 'react';
import CGFLLogo from '../../assets/CGFL-Logo.svg';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

export function AtlasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const projectData = {
  id: 1,
  title: "AtlasCGFL : Développement d'un atlas de scanners CT pour la radiothérapie 'Sim-Free'",
  stack: "Python • Imagerie Médicale • Data Science",
  context: "Actuellement, le délai entre une consultation et le début d'un traitement en radiothérapie peut atteindre 15 jours. L'objectif de ce projet est de réduire ce parcours à une unique visite de 3 heures en supprimant l'étape de scanner. Le défi technique consiste à pallier l'absence du scanner. La solution développée est un atlas de scanners génériques. Le développement de cet atlas repose sur une méthodologie rigoureuse d'extraction de features à partir de scanners CT, suivie d'un clustering. Pour chaque cluster, un scanner générique est créé avec des plans de traitements génériques qui seront prêts à être adaptés pour un nouveau patient. L'implémentation de ce projet a été réalisée en Python, avec une attention particulière portée à la validation dosimétrique et clinique des scanners génériques.",
  technical: [
    {
      title: "Standardisation & Prétraitement",
      desc: "Conversion des séries DICOM en volumes NIfTI 3D. Recadrage axial basé sur l'anatomie et rééchantillonnage pour harmoniser le spacing spatial de la cohorte."
    },
    {
      title: "Segmentation & Filtrage",
      desc: "Génération de masques par calculs mathématiques et traitement d'image. Soustraction des poches de gaz intestinaux et des artefacts métalliques."
    },
    {
      title: "Extraction de Features Quantitatives",
      desc: "Traduction des images en vecteurs quantitatifs selon deux axes : morphologique (volumes et composition) et densitométrique."
    },
    {
      title: "Clustering & Correction de Batch",
      desc: "Application de la méthode ComBat pour lisser la variance technique inter-scanners. Évaluation d'algorithmes de clustering (GMM, HAC, HDBSCAN) par des métriques de clustering, de stabilité et des tests statistiques sur les données cliniques (IMC/âge)."
    },
    {
      title: "Génération du scanner générique",
      desc: "Création de l'image de référence de chaque cluster par moyennage avec recalage itératif non-rigide (Normalisation Symétrique SyN) ou par extraction algorithmique du scanner patient 'médoïde'."
    },
    {
      title: "Validation Dosimétrique & Clinique",
      desc: "Élaboration d'un protocole de validation. Comparaison des scanners génériques recalés face aux scanners réels via des métriques d'imagerie (Dice, MAE, SSIM) et le Gamma Pass Rate."
    }
  ]
};

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.buttonWrapper}>
            <Button href="/#projects">← Retour aux projets</Button>
          </div>
          <Title as="h1">{projectData.title}</Title>
          <p className={styles.stack}>{projectData.stack}</p>
        </header>

        <div className={styles.heroImage}>
          <img src={CGFLLogo} alt="Visuel du projet Atlas CGFL" />
        </div>

        <article className={styles.content}>
          <section className={styles.textSection}>
            <h2>Contexte & Enjeux</h2>
            <p className={styles.contextText}>{projectData.context}</p>
          </section>

          <section className={styles.textSection}>
            <h2>Mise en œuvre technique</h2>
            <div className={styles.techGrid}>
              {projectData.technical.map((item, index) => (
                <div key={index} className={styles.techCard}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}