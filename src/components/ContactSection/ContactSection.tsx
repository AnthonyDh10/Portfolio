import { FaEnvelope, FaFileAlt, FaLinkedinIn } from 'react-icons/fa';
import type { ComponentType } from 'react';
import styles from './ContactSection.module.css';

type ContactLink = {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

const contactLinks: ContactLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/votre-profil',
    Icon: FaLinkedinIn,
  },
  {
    label: 'CV',
    href: '/cv.pdf',
    Icon: FaFileAlt,
  },
  {
    label: 'Mail',
    href: 'mailto:votre.mail@example.com',
    Icon: FaEnvelope,
  },
];

const mailHref =
  'mailto:votre.mail@example.com?subject=Contact%20depuis%20le%20portfolio&body=Bonjour%20Anthony%2C%0A%0AJe%20vous%20contacte%20pour...';

export function ContactSection() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h3 id="contact-title" className={styles.title}>
            Contact
          </h3>
          <p className={styles.description}>
            Echangeons sur vos besoins, une mission ou une opportunite d&apos;alternance.
          </p>
        </header>

        <div className={styles.layout}>
          <article className={styles.mailCard} aria-label="Card d'envoi de mail">
            <div className={styles.mailIconWrap}>
              <FaEnvelope className={styles.mailIcon} />
            </div>

            <h4 className={styles.mailTitle}>Envoyer un mail</h4>
            <p className={styles.mailText}>
              Ouvre votre client mail avec un objet et un message pre-remplis.
            </p>

            <a className={styles.mailButton} href={mailHref}>
              Demarrer la conversation
            </a>
          </article>

          <div className={styles.linksGrid}>
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                className={styles.linkCard}
                href={href}
                target={label === 'LinkedIn' ? '_blank' : undefined}
                rel={label === 'LinkedIn' ? 'noreferrer' : undefined}
                aria-label={`Lien ${label}`}
              >
                <Icon className={styles.linkIcon} />
                <span className={styles.linkLabel}>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
