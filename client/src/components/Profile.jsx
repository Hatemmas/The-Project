import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Profile.css'
import './NavBar.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link, NavLink, useNavigate } from 'react-router-dom';



const Profile = () => {

//News Data fetch

  const [news, setNews] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://gnews.io/api/v4/top-headlines?lang=en&max=20&topic=technology&token=ea849a95b5d18ed7b34fb90982055734')
        setNews(result.data.articles)
      } catch (error) {
      }
    }
    fetchData()
  }, [])

  //NavLink
  let navigateN = useNavigate(); 
  const routeChangeN = () =>{ 
    let path = `/news`; 
    navigateN(path);
  }


//Movies Data fetch

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"

  const [movies, setMovies] = useState([])

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const query= `&query=${searchKey}`
    const results = await axios.get(`https://api.themoviedb.org/3/${type}/movie?api_key=25ed1b7dbff456651f1b6e553eb294c8${query}`)
    setMovies(results.data.results)
  }

  useEffect (() => {
    fetchMovies()
  }, [])

  //NavLink
  let navigate = useNavigate(); 
  const routeChangeM = () =>{ 
    let path = `/movies`; 
    navigate(path);
  }

  //Games Data fetch

    //API auth
  const api = axios.create({
    headers: {
      'Client-ID': 'tjb75uamnpbsryekekxhqi5w5da6dx',
      'Authorization': 'Bearer zq2gao00kswo8muquagfon36rm6wgq'
    }
  })  
  
  const [games, setGames] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('https://api.twitch.tv/helix/games/top')
      const dataArray = result.data.data
      const finalData = dataArray.map(game => {
        const newURL = game.box_art_url.replace('{width}', '200').replace('{height}', '250')
        game.box_art_url=newURL
      })
      setGames(dataArray)
    }
    fetchData()
  }, [])

  //NavLink
  let navigateG = useNavigate(); 
  const routeChangeG = () =>{ 
    let path = `/games`; 
    navigateG(path);
  }
  
  return (
    <div>

      {/* News Carousel */}

      <div className='titleP'><h2>Latest Tech News</h2></div>

      <div className='carouselNews'>
        <Carousel className='carouselN'>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[0]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[0]?.title}</h4>
                <p>{news[0]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[1]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[1]?.title}</h4>
                <p>{news[1]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[2]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[2]?.title}</h4>
                <p>{news[2]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[3]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[3]?.title}</h4>
                <p>{news[3]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[4]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[4]?.title}</h4>
                <p>{news[4]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[5]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[5]?.title}</h4>
                <p>{news[5]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[6]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[6]?.title}</h4>
                <p>{news[6]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[6]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[6]?.title}</h4>
                <p>{news[6]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[7]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[7]?.title}</h4>
                <p>{news[7]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[8]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[8]?.title}</h4>
                <p>{news[8]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={news[9]?.image}
                alt="First slide"
                width={'640px'} 
                height={'360px'}/>
              <Carousel.Caption className='carouselCaptionN'>
                <h4 onClick={routeChangeN}>{news[9]?.title}</h4>
                <p>{news[9]?.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>

      {/* Movies Carousel */}

      <div className='titleP'><h2>Latest Movies</h2></div>

      <div className='carouselMovies'>
        <Carousel className='carouselM'>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[0]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[0]?.title}</h3>
              <p>{`Release Date : ${movies[0]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[1]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[1]?.title}</h3>
              <p>{`Release Date : ${movies[1]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[2]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[2]?.title}</h3>
              <p>{`Release Date : ${movies[2]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[3]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[3]?.title}</h3>
              <p>{`Release Date : ${movies[3]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[4]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[4]?.title}</h3>
              <p>{`Release Date : ${movies[4]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[5]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[5]?.title}</h3>
              <p>{`Release Date : ${movies[5]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[6]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[6]?.title}</h3>
              <p>{`Release Date : ${movies[6]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[7]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[7]?.title}</h3>
              <p>{`Release Date : ${movies[7]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[8]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[8]?.title}</h3>
              <p>{`Release Date : ${movies[8]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={`${IMAGE_PATH}${movies[9]?.backdrop_path}`}
              alt="First slide"
              width={'640px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionM'>
              <h3 onClick={routeChangeM}>{movies[9]?.title}</h3>
              <p>{`Release Date : ${movies[9]?.release_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Games Carousel */}

      <div className='titleP'><h2>Most Popular Gaming Streams</h2></div>

      <div className='carouselGames'>
        <Carousel className='carouselG'>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[0]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[0]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[1]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[1]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[2]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[2]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[3]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[3]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[4]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[4]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[5]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[5]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[6]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[6]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[7]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[7]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[8]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[8]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={games[9]?.box_art_url}
              alt="First slide"
              width={'500px'} 
              height={'360px'}/>
            <Carousel.Caption className='carouselCaptionG'>
              <h3 onClick={routeChangeG}>{games[9]?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
  )
}

export default Profile