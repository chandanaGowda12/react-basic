const movie = ({ movie }) => {

    return (
        <li key={movie.id} class="movie">
            <img src={movie.poster} alt={movie.title} />
            <div class="movie-content">
                <span class="movie-title">{movie.title} </span>
                <span class="movie-director">{movie.director}</span>
                <span class="movie-description">{movie.description}</span>
                <div class="movie-details">
                <span> Rating:- {movie.rating}</span>   
                <span> Year:-  {movie.year}</span>
                <span> Runtime:- {movie.runtime}</span>
                </div>

            </div>


        </li>
    )
}

export default movie;