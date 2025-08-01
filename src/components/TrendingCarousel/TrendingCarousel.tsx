import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./TrendingCarousel.module.css";
import type { Movie } from "../../types";
import { MovieCard } from "./MovieCard";

interface TrendingCarouselProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

export const TrendingCarousel: React.FC<TrendingCarouselProps> = ({
  movies,
  onMovieSelect,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });

  useEffect(() => {
    if (emblaApi) {
      const viewport = emblaApi.rootNode();

      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();

        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
          if (event.deltaX > 0) {
            emblaApi.scrollNext();
          } else {
            emblaApi.scrollPrev();
          }
        }
        else {
          if (event.deltaY > 0) {
            emblaApi.scrollNext();
          } else {
            emblaApi.scrollPrev();
          }
        }
      };

      viewport.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        viewport.removeEventListener("wheel", handleWheel);
      };
    }
  }, [emblaApi]);

  return (
    <div className={styles.carouselSection}>
      <h2 className={styles.sectionTitle}>Trending Now</h2>
      <div className={styles.embla}>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {movies.map((movie) => (
              <div key={movie.Id} className={styles.slide}>
                <MovieCard movie={movie} onClick={() => onMovieSelect(movie)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
