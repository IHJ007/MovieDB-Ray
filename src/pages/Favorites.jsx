import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../Components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites.length === 0) {
        return (
            <div className = "favorites-empty">
                <h3>No favorites yet</h3>
                <p>Start adding movies to your favorites and they'll appear here!</p>
            </div>
        )
    }

    return (
        <div className = "favorites">
            <h2>Favorites</h2>
            <div className = "movie-grid">
                {favorites.map(movie => (
                    <MovieCard key = {movie.imdbID} movie = {movie} />
                ))}
            </div>
        </div>
    )
}

export default Favorites
