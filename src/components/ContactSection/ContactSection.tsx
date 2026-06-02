import { FaEnvelope, FaFileAlt, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import React from 'react'; 
import styles from './ContactSection.module.css';
import type { IconType } from 'react-icons';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { IconContext } from 'react-icons';

type ContactInfo = {
  label: string;
  value?: string;
  href: string;
  Icon: IconType; 
};

const contactInfos: ContactInfo[] = [
  {
    label: 'Téléphone',
    value: '+33 6 00 00 00 00',
    href: 'tel:+33600000000',
    Icon: FaPhoneAlt,
  },
  {
    label: 'LinkedIn',
    value: 'Anthony Dinh',
    href: 'https://www.linkedin.com/in/votre-profil',
    Icon: FaLinkedinIn,
  },
  {
    label: 'Curriculum Vitae',
    value: 'Consulter au format PDF',
    href: '/cv.pdf',
    Icon: FaFileAlt,
  },
];

export function ContactSection() {
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent(formData.get('subject') as string);
    const message = encodeURIComponent(formData.get('message') as string);
    
    window.location.href = `mailto:adinhpsn@gmail.com?subject=${subject}&body=${message}`;
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <Title as="h3" id="contact-title">Contact</Title>
          <p className={styles.description}>
            Échangeons sur vos besoins, une mission ou autre.
          </p>
        </header>

        <div className={styles.layout}>
          {/* Colonne 1 : Informations & Réseaux */}
          <aside className={styles.infoColumn}>
            <Card className={styles.retroBox}>
              <Title as="h4" id="contact-title">Mes Coordonnées</Title>
              <div className={styles.infoList}>
                {contactInfos.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.infoCard}
                    target={label !== 'Téléphone' ? '_blank' : undefined}
                    rel={label !== 'Téléphone' ? 'noreferrer' : undefined}
                  >
                    <div className={styles.iconWrap}>
                      <IconContext.Provider value={{ className: styles.icon }}>
                        <Icon />
                      </IconContext.Provider>
                    </div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{label}</span>
                      {value && <span className={styles.infoValue}>{value}</span>}
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </aside>

          {/* Colonne 2 : Formulaire de contact direct */}
          <article className={styles.formColumn}>
            {/* Suppression de styles.retroBox, car <Card> s'occupe déjà des bordures et de l'ombre */}
            <Card>
              <div className={styles.formHeader}>
                <IconContext.Provider value={{ className: styles.formHeaderIcon }}>
                  <FaEnvelope />
                </IconContext.Provider>
                <Title as="h4" id="contact-title">Envoyer un message</Title>
              </div>
              
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="subject" className={styles.label}>Objet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={styles.retroInput}
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.retroTextarea}
                    rows={6}
                    placeholder="Bonjour Anthony..."
                    required
                  />
                </div>

                {/* Suppression de styles.retroButton, le composant <Button> gère tout son design. 
                    Correction de l'apostrophe avec &apos; pour éviter les warnings React. */}
                <Button type="submit">
                  Préparer l&apos;e-mail
                </Button>
              </form>
            </Card>
          </article>
        </div>
      </div>
    </section>
  );
}