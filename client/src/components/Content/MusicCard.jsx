import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import '../Pages/Music.css' 

const MusicCard = ({radio}) => {

  return (
    <div className='musicCard' >
      {radio.favicon ? <img className='musicPoster' src={radio.favicon} alt="" width={'150px'} height={'150px'} />
        : <div className='posterPlaceholder2'>No Logo Available</div>}        
          <ReactAudioPlayer
              src={radio.url_resolved}
              controls
          />
      <h3 >{radio.name}</h3>
      <p>{radio.country}</p>
    </div>
  )
}

export default MusicCard