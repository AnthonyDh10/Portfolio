import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './Button.module.css';

// Renommage pour éviter les conflits avec le type "ButtonProps" du composant
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
} & (
  | ({ href?: undefined } & NativeButtonProps)
  | ({ href: string } & AnchorProps)
);

export function Button({ children, className = '', href, ...props }: ButtonProps) {
  const combinedClassName = `${styles.button} ${className}`.trim();

  // Si une URL est fournie, on rend une balise <a>
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...(props as AnchorProps)}>
        {children}
      </a>
    );
  }

  // Sinon, on rend une balise <button> classique
  return (
    <button className={combinedClassName} {...(props as NativeButtonProps)}>
      {children}
    </button>
  );
}