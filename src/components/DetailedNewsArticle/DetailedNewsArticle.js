import React from 'react'
import './DetailedNewsArticle.css'
import { useParams } from 'react-router-dom'

const DetailedNewsArticle = ({ articles }) => {

  const index = useParams().index
  let article
  let date

  if (articles.length) {
    article = articles[index]
    date = article.published_date.split('T')
  } else { 
    date = ''
  }

  return (
    <div>
      {!date ? <p>Loading ...</p> :
        <div className='detailed-news-article'>
          <img src={article.multimedia[1].url} alt={article.multimedia[1].caption} />
          <h2 className='detailed-article-title'>{article.title}</h2>
          <p>{article.byline}</p>
          <p>{date[0]}</p>
          <p>{article.abstract}</p>
          <p>See the full article: <a href={article.url}>Link to New York Times</a></p>
        </div>}
    </div>
  )
}

export default DetailedNewsArticle