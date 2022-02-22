import React from 'react'
import './NewsArticle.css'

const NewsArticle = ({article}) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.byline}</p>
    </div>
  )
}

export default NewsArticle