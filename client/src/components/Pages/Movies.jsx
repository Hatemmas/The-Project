import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import MovieCard from '../Content/MovieCard';
import './Movies.css'
import { Link, Navigate, NavLink } from 'react-router-dom';
import Profile from '../Profile';


const Movies = () => {

  //API Data

  const [movies, setMovies] = useState([])
  const [selectMovies, setSelectMovies] = useState({})
  const [searchKey, setSearchKey] = useState("")
  const [playTrailer, setPlayTrailer] = useState(false)
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original"

  //Data fetch

const fetchMovies = async (searchKey) => {
  const type = searchKey ? "search" : "discover"
  const query= `&query=${searchKey}`
  const {data: {results}} = await axios.get (`https://api.themoviedb.org/3/${type}/movie?api_key=25ed1b7dbff456651f1b6e553eb294c8${query}`)
  await selectMovieT(results[0])
  setMovies(results)
}

const fetchMovie = async (id) => {
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=25ed1b7dbff456651f1b6e553eb294c8&append_to_response=videos`)
  return data
}

  //Select Movie id for trailer

const selectMovieT = async (movie) => {
  setPlayTrailer(false)
  const data = await fetchMovie(movie.id)
  setSelectMovies(data)
}

useEffect (() => {
  fetchMovies()
}, [])

const renderMovies = () => (movies.map (movie => (<MovieCard key={movie.id} movie={movie} selectMovie={selectMovieT}/>) ))

  //search for a Movie function

const searchMovies = (e) => {
  e.preventDefault()
  fetchMovies(searchKey)
}

  //Trailer rendering

const renderTrailer = () => {
  const trailer = selectMovies.videos.results.find(vid => vid.name === 'Official Trailer')
  const key = trailer ? trailer.key : selectMovies.videos.results[0].key

  //Youtube Player

  return ( 
    <YouTube 
      videoId={key} 
      className="youtube-container"
      opts={{ width: "100%", 
              height: "100%", 
              playerVars: {
              autoplay: 1
              }}}
    /> )
}


return (
  <div className="App">
    <div>
        {
          !localStorage.getItem("token")?
          <Navigate to = "/login" />
          :
        <div></div>} 

    </div>

      {/* Top Board */}

      <div className='headerContent centerMax'>
        <form onSubmit={searchMovies}>
          <input type="text" placeholder={'Search for a movie'} onChange={(e) => setSearchKey (e.target.value) }/>
          <button type={"submit"}> <img src='https://res.cloudinary.com/hatemmas/image/upload/v1659910306/kindpng_254250_effspb.png' height={'25px'} width={'25px'} alt='' /> </button>
        </form>
      </div>

      <div className='board' style={{backgroundImage: `url('${IMAGE_PATH}${selectMovies.backdrop_path}')`}}>
      
        <div className='boardContent centerMax'>
          { playTrailer ? <button className='boardButton boardButtonClose' onClick={() => setPlayTrailer(false)}>Close</button> : null}
          {selectMovies.videos && playTrailer ? renderTrailer() : null}
          <button className='boardButton' onClick={ () => setPlayTrailer(true)}>Watch Trailer</button>
          <h1>{selectMovies.title}</h1>
          <p>{selectMovies.overview}</p>

        </div>
      </div>

      {/* Movies Card   */}

      <div className='container centerMax'> 
        {renderMovies()} 
      </div>

      {/* Page Footer */}

      <div className='footer'>
        <div className='homeL'>
        <Link to="/profile"> <img src='https://res.cloudinary.com/hatemmas/image/upload/v1659964141/Logo_HM_l4d70l.svg' height={'90px'} width={'90px'} alt='' /> </Link>
        </div>
        <div className='footerNav'>
            <ul  >
                <li >
                  <NavLink className="NLink" to="/news">News</NavLink>
                </li>
                <li >
                  <NavLink className="NLink" to="/movies">Movies</NavLink>
                </li>
                <li >
                  <NavLink className="NLink" to="/music">Music</NavLink>
                </li>
                <li >
                  <NavLink className="NLink" to="/games">Gaming</NavLink>
                </li>
            </ul>
        </div>

        <div className='source'>
          <p>External API :</p>
        </div>
          <div className='sourceL'>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" height={'80px'} width={'80px'} />
          <img src="https://res.cloudinary.com/hatemmas/image/upload/v1660189303/twitch-logo-png-1862_e19af1.png" alt="" width={'132px'} height={'34px'} />
          <img src="https://gnews.io/assets/images/logo-white.svg" alt="" width={'132px'} height={'28px'} />
          <img src="https://res.cloudinary.com/hatemmas/image/upload/v1660693610/Radio_Browser_Logo_ewxbwe.png" alt="" height={'110px'} width={'110px'} />
          </div>

          <div>
            <p>Copyright © 2022 Hatem Masmoudi</p>
          </div>

          <div className='social'>
            <a href="https://www.linkedin.com/in/hatem-masmoudi" ><img src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt="" width={'120px'} height={'28px'} /></a>
            <a href="https://github.com/Hatemmas" ><img src="https://res.cloudinary.com/hatemmas/image/upload/v1660694492/GitHub-Mark-Light-120px-plus_v3ztbc.png" alt="" width={'45px'} height={'45px'} /></a>
          </div>

      </div>

  </div>
);
}

export default Movies