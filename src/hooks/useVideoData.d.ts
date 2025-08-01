import type { Movie } from '../types';
export declare function useVideoData(): {
    featuredMovie: Movie | null;
    trendingMovies: Movie[];
    selectMovie: (movie: Movie) => void;
    loading: boolean;
};
