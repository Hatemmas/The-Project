import React from 'react'
import '../Pages/News.css'

const NewsCard = ({news}) => {

  return (
    <div className='newsCard'>
      <img className='newsPoster' src={news.image} alt="" width={'416px'} height={'234px'} onClick={`${news.url}`} />
      <h5>{news.title}</h5>
      <p>{news.description}</p>
      <button type="button" className="btn">
        <a className="link"href={news.url} >
           Read more
        </a>
      </button>
    </div>
  )
}

export default NewsCard