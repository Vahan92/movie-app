import React from 'react';
import type { Movie } from '../../types';
interface MovieCardProps {
    movie: Movie;
    onClick: () => void;
}
export declare const MovieCard: React.FC<MovieCardProps>;
export {};
