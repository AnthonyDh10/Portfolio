import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './NavBar.module.css';
import { Button } from '../Button/Button';
import { ThemeToggle } from './ThemeToggle';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '/#about', label: 'À propos de moi' },
    { href: '/#skills', label: 'Compétences' },
    { href: '/#projects', label: 'Mes projets' },
    { href: '#contact', label: 'Contact' },
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

            <Button
              type="button"
              className={styles.menuButton}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span className={styles.menuButtonLabel}>{isMenuOpen ? 'Fermer' : 'Menu'}</span>
            </Button>
          </div>

          <div className={styles.rightGroup}>
            <ThemeToggle />
            <Button
              className={styles.contactButton}
              href="#contact"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </Button>
          </div>
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
                    {/* Ajout de la flèche ici */}
                    <span className={styles.menuLinkArrow} aria-hidden="true">
                      &larr;
                    </span>
                  </a>
                ))}
              </div>

              <Button
                type="button"
                className={styles.menuCloseArrow}
                aria-label="Refermer le menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.arrowIcon} aria-hidden="true" />
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export { NavBar as Navbar };
export default NavBar;