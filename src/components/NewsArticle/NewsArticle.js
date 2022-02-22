import React from 'react'
import './NewsArticle.css'

const NewsArticle = ({article}) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
      <p>{article.published_date}</p>
      <img src={article.multimedia[2].url} alt={article.multimedia[2].caption}/>
    </div>
  )
}

export default NewsArticle