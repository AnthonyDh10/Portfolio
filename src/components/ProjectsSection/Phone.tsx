import React from 'react';
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import LaForgeLogo from '../../assets/laforge-logo.svg';
import styles from './Phone.module.css';

type PhoneProps = {
  style?: React.CSSProperties;
  className?: string;
};

export function Phone({ style, className }: PhoneProps) {
  return (
    <div className={`${styles.phoneContainer} ${className || ''}`} style={style}>
      <div className={styles.phoneOuter}>
        <div className={styles.phoneInner}>
          
          {/* Barre supérieure (Notch + Icônes) */}
          <div className={styles.phoneHeaderNotch}></div>
          <div className={styles.phoneHeaderIcons}>
            <FiWifi />
            <FiBatteryCharging />
          </div>

          {/* Écran interne */}
          <div className={styles.phoneScreen}>
            <img 
              src={LaForgeLogo} 
              alt="LaForge Logo" 
              className={styles.phoneLogo} 
            />
          </div>

        </div>
      </div>
    </div>
  );
}