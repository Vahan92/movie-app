import { Sidebar } from './components/Sidebar/Sidebar';
import { FeaturedContent } from './components/FeaturedContent/FeaturedContent';
import { TrendingCarousel } from './components/TrendingCarousel/TrendingCarousel';
import { useVideoData } from './hooks/useVideoData';
import './App.css';

function App() {
  const { featuredMovie, trendingMovies, selectMovie, loading } = useVideoData();

  if (loading || !featuredMovie) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar />
      
      <main className="main-content">
        <FeaturedContent movie={featuredMovie} />
        <TrendingCarousel 
          movies={trendingMovies} 
          onMovieSelect={selectMovie}
        />
      </main>
    </div>
  );
}

export default App;