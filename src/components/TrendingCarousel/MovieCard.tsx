import React from 'react';
import type { Movie } from '../../types';

import styles from './TrendingCarousel.module.css';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div className={styles.movieCard} onClick={onClick}>
      <img 
        src={new URL(`../../assets/images/${movie.CoverImage}`, import.meta.url).href}
        alt={movie.Title}
        className={styles.movieImage}
        loading="lazy"
      />
      <div className={styles.movieOverlay}>
        <h3 className={styles.movieTitle}>{movie.Title}</h3>
      </div>
    </div>
  );
};