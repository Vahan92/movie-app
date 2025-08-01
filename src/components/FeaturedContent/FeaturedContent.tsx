import React, { useState, useEffect } from "react";
import type { Movie } from "../../types";
import { formatDuration } from "../../utils/formatters";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import styles from "./FeaturedContent.module.css";

interface FeaturedContentProps {
  movie: Movie;
}

export const FeaturedContent: React.FC<FeaturedContentProps> = ({ movie }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setShowVideo(false);

    const id = setTimeout(() => {
      if (movie.VideoUrl) {
        setShowVideo(true);
      }
    }, 2000);

    setTimeoutId(id);

    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie.Id]);

  return (
    <div className={styles.featuredContainer}>
      {showVideo && movie.VideoUrl ? (
        <VideoPlayer url={movie.VideoUrl} />
      ) : (
        <img
          src={
            new URL(`../../assets/images/${movie.CoverImage}`, import.meta.url)
              .href
          }
          alt={movie.Title}
          className={styles.backgroundImage}
        />
      )}

      <div className={styles.gradient} />

      <div className={styles.content}>
        <div className={styles.category}>{movie.Category.toUpperCase()}</div>

        <h1 className={styles.title}>{movie.Title}</h1>

        <div className={styles.metadata}>
          <span>{movie.ReleaseYear}</span>
          <span className={styles.rating}>{movie.MpaRating}</span>
          <span>{formatDuration(movie.Duration)}</span>
        </div>

        <p className={styles.description}>{movie.Description}</p>

        <div className={styles.buttons}>
          <button className={styles.playButton}>
            <span className={styles.playIcon}>▶</span>
            Play
          </button>
          <button className={styles.moreInfoButton}>More Info</button>
        </div>
      </div>
    </div>
  );
};
