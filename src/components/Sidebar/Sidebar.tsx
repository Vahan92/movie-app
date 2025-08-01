import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { MenuItem } from "./MenuItem";
import SearchIcon from "../../assets/icons/ICON - Search.png";
import MoviesIcon from "../../assets/icons/Group 56.png"; 
import TvShowsIcon from "../../assets/icons/Group 54.png"; 
import WatchLater from "../../assets/icons/Group 47.png";
import Genres from "../../assets/icons/Group 53.png";
import Home from "../../assets/icons/Group 46.png";
import Avatar from "../../assets/images/https_specials-7.png";

const menuItems = [
  { id: "search", label: "Search", icon: SearchIcon },
  { id: "home", label: "Home", icon: Home, active: true },
  { id: "tvShows", label: "TV Shows", icon: TvShowsIcon },
  { id: "movies", label: "Movies", icon: MoviesIcon },
  { id: "genres", label: "Genres", icon: Genres },
  { id: "watchLater", label: "Watch Later", icon: WatchLater },
];

const bottomMenuItems = [
  { id: "language", label: "LANGUAGE" },
  { id: "help", label: "GET HELP" },
  { id: "exit", label: "EXIT" },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.menuItems}>
          <div className={styles.profile}>
            <img src={Avatar} alt="Daniel" className={styles.avatar} />
            {isOpen && <span className={styles.username}>Daniel</span>}
          </div>

          {menuItems.map((item) => (
            <MenuItem key={item.id} {...item} isOpen={isOpen} />
          ))}
        </div>

        {isOpen && (
          <div className={styles.bottomMenu}>
            {bottomMenuItems.map((item) => (
              <div key={item.id} className={styles.bottomMenuItem}>
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};
