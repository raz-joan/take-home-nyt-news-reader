import React from 'react'
import './NewsArticle.css'

const NewsArticle = ({ article }) => {
  
  const date = article.published_date.split('T')

  return (
    <div className='news-article'>
      <h2 className='news-article-title'>{article.title}</h2>
      <div className='news-article-info-container'>
        <p className='news-article-info'>{article.byline}</p>
        <p className='news-article-info'>Published on: {date[0]}</p>
      </div>
    </div>
  )
}

export default NewsArticle