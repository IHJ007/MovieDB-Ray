import MovieCard from '../Components/MovieCard';
import { useState, useEffect } from 'react';
import '../css/Home.css';
import { searchMovies, getPopularMovies } from '../services/api';

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(error);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();

    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim() || loading) return

        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.error(error);
            setError("Failed to search...");
        } finally {
            setLoading(false);
        };
    };

    return(
        <div className = "home">
            <form onSubmit = {handleSearch} className = "search-form">
                <input type = "text" placeholder = "Search for movies..."
                className = "search-box" value = {searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}>

                </input>

            <button type = "submit" className = "search-button">
                Search
            </button>
            </form>

            {error && <div className = "error-message">{error}</div>}

            {loading ? (<div className = "loading">Loading...</div>) : 
            (<div className = "movie-grid">
                {movies.map(movie => 
                    movie.Title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie = {movie} key = {movie.imdbID} />
                ))}
            </div>
            )}
            
        </div>
    )
}

export default Home
