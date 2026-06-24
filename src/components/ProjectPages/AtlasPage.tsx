import styles from './AtlasPage.module.css';
import { useEffect } from 'react';
import SFPM from '../../assets/SFPM.png';
import { ReturnButton } from '../ReturnButton/ReturnButton';
import { Title } from '../Title/Title';

export function AtlasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const projectData = {
  id: 1,
  title: "Développement d'un atlas de scanners CT pour ultra-accélérer la radiothérapie",
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
      desc: "Élaboration d'un protocole de validation. Comparaison des scanners génériques recalés face aux scanners réels via des métriques d'imagerie (Dice, MAE, SSIM) et le Gamma Index Pass Rate."
    }
  ]
};

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.buttonWrapper}>
            <ReturnButton />
          </div>
          <Title as="h1">{projectData.title}</Title>
          <p className={styles.stack}>{projectData.stack}</p>
        </header>

        <section className={styles.sfpmBlock}>
          <h2 className={styles.sfpmTitle}>64èmes Journées Scientifiques de la SFPM</h2>
          <div className={styles.sfpmRow}>
            <div className={styles.heroImage}>
              <img src={SFPM} alt="Présentation aux journées scientifiques de la SFPM" />
            </div>
            <div className={styles.highlightCard}>
              <p className={styles.contextText}>
                Les résultats préliminaires très prometteurs obtenus sur le projet PUMA-RT m'ont permis d'être sélectionné pour présenter nos travaux sur l'atlas de scanners lors des <strong>64èmes Journées Scientifiques de la Société Française de Physique Médicale (SFPM)</strong>.
              </p>
            </div>
          </div>
        </section>

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