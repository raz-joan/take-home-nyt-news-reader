import React from 'react'
import './DetailedNewsArticle.css'
import { useParams } from 'react-router-dom'

const DetailedNewsArticle = ({ articles }) => {

  const index = Number(useParams().index)
  let article
  let date

  if (index && 0 <= index && index < articles.length) {
    article = articles[index]
    date = article.published_date.split('T')
  } else {
    article = ''
    date = ''
  }

  return (
    <div className='detailed-container'>
      {article ?
        (!date ? <p>Loading ...</p> :
          <div className='detailed-news-article'>
            <h2 className='detailed-article-title'>{article.title}</h2>
            <img src={article.multimedia[1].url} alt={article.multimedia[1].caption} />
            <p className='detailed-article-info'>{article.byline}</p>
            <p className='detailed-article-info'>{date[0]}</p>
            <p className='detailed-article-info'>{article.abstract}</p>
            <a href={article.url} className='detailed-article-info'>Link to full article on the New York Times</a>
          </div>) :
        <p className='error-url-path'>404: This page does not exist. Sorry!</p>
      }
    </div>
  )
}

export default DetailedNewsArticle