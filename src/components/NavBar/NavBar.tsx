import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './NavBar.module.css';
import { Button } from '../Button/Button';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      href: '#skills',
      label: 'Compétences',
      comment: "Les différentes technologies dont j'ai l'habitude",
    },
    {
      href: '#projects',
      label: 'Mes projets',
      comment: 'Sélection de réalisations, études de cas et résultats',
    },
    {
      href: '/about',
      label: 'À propos de moi',
      comment: 'Parcours, méthodes de travail et objectifs professionnels',
    },
    {
      href: '#contact',
      label: 'Contact',
      comment: 'Canaux de contact, CV et message direct',
    },

  ];

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onEscape);

    return () => {
      window.removeEventListener('keydown', onEscape);
    };
  }, []);

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navShell}>
        <div className={styles.navbarContent}>
          <div className={styles.leftGroup}>
            <a className={styles.logo} href="/" aria-label="Aller à l'accueil">
              AD
            </a>

            <span className={styles.separator} aria-hidden="true">
              |
            </span>

            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={isMenuOpen}
              aria-label="Ouvrir le menu"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span className={styles.menuButtonLabel}>{isMenuOpen ? 'Fermer' : 'Menu'}</span>
            </button>
          </div>

          <Button href="#contact">
            Contactez-moi
          </Button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              className={styles.menuPanel}
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.menuPanelInner}>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.menuLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className={styles.menuLinkTitle}>{link.label}</span>
                    <span className={styles.menuLinkComment}>// {link.comment}</span>
                  </a>
                ))}
              </div>

              <button
                type="button"
                className={styles.menuCloseArrow}
                aria-label="Refermer le menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.arrowIcon} aria-hidden="true" />
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export { NavBar as Navbar };
export default NavBar;