import type { ReactNode } from 'react';
import styles from './Title.module.css';

type TitleProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  // Permet de choisir la balise sémantique (h2 par défaut)
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
};

export function Title({ 
  children, 
  className = '', 
  id, 
  as: Tag = 'h2' 
}: TitleProps) {
  
  const combinedClassName = `${styles.title} ${className}`.trim();

  return (
    <Tag id={id} className={combinedClassName}>
      {children}
    </Tag>
  );
}