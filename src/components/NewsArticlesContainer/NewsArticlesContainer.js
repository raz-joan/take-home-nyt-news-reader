import React from 'react'
import './NewsArticlesContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsArticlesContainer = ({ articles }) => {
  
  const articlesJSX = articles.map((article, index) => {
    return (
      <NewsArticle key={index} article={article}/>
    )
  })

  return (
    <div className='news-articles-container'>
      {articlesJSX}
    </div>
  )
}

export default NewsArticlesContainer