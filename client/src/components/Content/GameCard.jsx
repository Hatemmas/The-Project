import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages/Games.css'


const GameCard = ({game}) => {
  return (
    <div className='gameCard movieCard' >
        <img className='poster' src={game.box_art_url} alt=""  />
        <h3 >{game.name}</h3>
        <button type="button" className="btn">
            <Link className='link' to= {`${game.id}`}>
                {game.name} streams{" "} <img src="https://res.cloudinary.com/hatemmas/image/upload/v1660096011/twitch-seeklogo.com_ktszx0.svg" alt="" width={'20px'} height={'20px'} />
            </Link>
        </button>
        
    </div>
  )
}

export default GameCard