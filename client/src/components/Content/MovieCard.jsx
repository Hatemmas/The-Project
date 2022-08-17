import React from 'react'


const MovieCard = ({movie, selectMovie}) => {
  
  //back to Top
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
    
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    
  return (
    <div className='movieCard' onClick={() => selectMovie(movie) }>
      {movie.poster_path ? <img className='poster' src={`${IMAGE_PATH}${movie.poster_path}`} alt="" onClick={topFunction()} />
      : <div className='posterPlaceholder'>No Poster Available</div>}
        <h3>{movie.title}</h3>
        <p> {`Release Date : ${movie.release_date}`} </p>
        <p className='rating'> {`Rating : ${movie.vote_average} /10`} </p>
    </div>
  )
}

export default MovieCard