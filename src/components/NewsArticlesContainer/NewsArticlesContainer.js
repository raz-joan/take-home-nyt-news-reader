import React from 'react'
import './NewsArticlesContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'
import {Link} from 'react-router-dom'

const NewsArticlesContainer = ({ articles }) => {
  
  const articlesJSX = articles.map((article, index) => {
    return (
      <Link to={`/articles/${index}`}>
        <NewsArticle key={index} article={article}/>
      </Link>
    )
  })

  return (
    <div className='news-articles-container'>
      {articlesJSX}
    </div>
  )
}

export default NewsArticlesContainer