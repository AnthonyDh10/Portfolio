import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './NavBar.module.css';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
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
            <a className={styles.logo} href="#about" aria-label="Aller a la section A propos">
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

          <a className={styles.contactButton} href="#contact">
            Contactez-moi
          </a>
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
                    {link.label}
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