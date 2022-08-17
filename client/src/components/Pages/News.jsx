import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import NewsCard from '../Content/NewsCard'



const News = () => {

  //API data fetching

  const [news, setNews] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://gnews.io/api/v4/top-headlines?lang=en&max=20&topic=technology&token=ea849a95b5d18ed7b34fb90982055734')
        setNews(result.data.articles)
        console.log(result.data.articles)
      } catch (error) {
      }
    }
    fetchData()
  }, [])

  return (
    <div>
        {
          !localStorage.getItem("token")?
          <Navigate to = "/login" />
          :
        <div></div>} 
        
    <div className='titleG'>
      <h2>Latest Technology News</h2>
      
    </div>
      <div className='container4 centerMax'>
        {news.map(newsFeed => (<NewsCard key={newsFeed.id} news={newsFeed} />))}
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

export default News