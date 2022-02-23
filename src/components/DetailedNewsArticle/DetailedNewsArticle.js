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
          <h2 className='detailed-article-title'>{article.title}</h2>
          <img src={article.multimedia[1].url} alt={article.multimedia[1].caption} />
          <p className='detailed-article-info'>{article.byline}</p>
          <p className='detailed-article-info'>{date[0]}</p>
          <p className='detailed-article-info'>{article.abstract}</p>
          <a href={article.url} className='detailed-article-info'>Link to full article on the New York Times</a>
        </div>}
    </div>
  )
}

export default DetailedNewsArticle