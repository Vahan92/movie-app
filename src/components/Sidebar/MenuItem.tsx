import React from 'react';
import styles from './Sidebar.module.css';

interface MenuItemProps {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  isOpen: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  label, 
  icon, 
  active = false, 
  isOpen 
}) => {
  return (
    <div className={`${styles.menuItem} ${active ? styles.active : ''}`}>
      {/* <span className={styles.icon}>{icon}</span> */}
      <img src={icon} alt={label} />
      {isOpen && <span className={styles.label}>{label}</span>}
    </div>
  );
};