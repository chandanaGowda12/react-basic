import { movies } from './data/movies';
import Movie from './movie';
import './style/movie.css'
const getMoviesData = () => {
    return movies;
}
const MovieComponent = () => {
    const moviesList = getMoviesData();

    return (
        <div class= "movie-container">
            <h2 class ="heading">Movies List</h2>
            <ul class = "movie-list">
                {
                    moviesList.map((movie, index) => (
                        <Movie key= {movie.id} movie={movie}></Movie>
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieComponent;