import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'


//logout function
const NavBar = () => {
  const navigate = useNavigate()
  function logOut() {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>

    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <Link className="navbar-brand" to="/profile"> <img src='https://res.cloudinary.com/hatemmas/image/upload/v1659964141/Logo_HM_l4d70l.svg' height={'90px'} width={'90px'} alt='' /> </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" >
            <li className="nav-item active">
              <NavLink className="nav-link" to="/news">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/music">Music</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/games">Gaming</NavLink>
            </li>
          </ul>
        </div>

        <div className='logoutBtn'>
          <button type="button" className="btn btn-link" onClick={logOut} > <img src='https://res.cloudinary.com/hatemmas/image/upload/v1660183848/logout-256_nuvfx4.png' height={'30px'} width={'30px'} alt='' /> </button>
        </div>
      </nav>
    </header>

    </>
  )
}

export default NavBar