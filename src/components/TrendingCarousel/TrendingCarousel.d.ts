import React from "react";
import type { Movie } from "../../types";
interface TrendingCarouselProps {
    movies: Movie[];
    onMovieSelect: (movie: Movie) => void;
}
export declare const TrendingCarousel: React.FC<TrendingCarouselProps>;
export {};
