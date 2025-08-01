import { useState, useEffect } from 'react';
import type { Movie, MovieData } from '../types';
import { useSessionStorage } from './useSessionStorage';

export function useVideoData() {
  const [data, setData] = useState<MovieData | null>(null);
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [watchedIds, setWatchedIds] = useSessionStorage<string[]>('watchedMovies', []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await import('../assets/data.json');
      setData(response.default as MovieData);
      setFeaturedMovie(response.default.Featured);
      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };

  const getSortedMovies = () => {
    if (!data) return [];
    
    const movies = [...data.TendingNow];
    
    return movies.sort((a, b) => {
      const aWatched = watchedIds.includes(a.Id);
      const bWatched = watchedIds.includes(b.Id);
      
      if (aWatched && !bWatched) return -1;
      if (!aWatched && bWatched) return 1;
      
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    }).slice(0, 50);
  };

  const selectMovie = (movie: Movie) => {
    setFeaturedMovie(movie);
    
    if (!watchedIds.includes(movie.Id)) {
      setWatchedIds([movie.Id, ...watchedIds]);
    }
  };

  return {
    featuredMovie,
    trendingMovies: getSortedMovies(),
    selectMovie,
    loading
  };
}