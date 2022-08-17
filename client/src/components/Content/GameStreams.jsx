import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GameStreams = () => {

//Streamers Channels fetching

  //API auth
  const api = axios.create({
    headers: {
      'Client-ID': 'tjb75uamnpbsryekekxhqi5w5da6dx',
      'Authorization': 'Bearer zq2gao00kswo8muquagfon36rm6wgq'
    }
  })  
  
  const params = useParams()

  const [streams, setStreams] = useState([])

useEffect(() => {
  const fetchData = async () => {
    const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=${params.id}`)
    console.log(result.data)
    const dataArray = result.data.data
    const finalData = dataArray.map(stream => {
      const newURL = stream.thumbnail_url.replace('{width}', '320').replace('{height}', '180')
      stream.thumbnail_url=newURL
    })
    setStreams(result.data.data)
  }
  fetchData()
}, [])

  return (
      <div className="container2 centerMax">

      {streams.map(stream => (
          <div className="gameCard movieCard">
            <img className="poster" src={stream.thumbnail_url} />
            <h3>{stream.user_name}</h3>
            <p className="card-text">{stream.viewer_count} live viewers</p>
            <button type="button" className="btn">
              <a className="link"href={"https://twitch.tv/" + stream.user_name} target="_blank">
                watch {stream.user_name}'s channel <img src="https://res.cloudinary.com/hatemmas/image/upload/v1660096011/twitch-seeklogo.com_ktszx0.svg" alt="" width={'20px'} height={'20px'} />
              </a>
            </button>
          </div>
        ))}
    
    </div>
  )
}

export default GameStreams
