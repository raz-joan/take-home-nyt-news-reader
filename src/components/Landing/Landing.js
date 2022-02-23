import React from 'react'
import './Landing.css'
import Search from '../Search/Search'
import NewsArticlesContainer from '../NewsArticlesContainer/NewsArticlesContainer'

const Landing = ({ sendRequest, articles, section }) => {
  return (
    <div className='App-body'>
      <Search sendRequest={sendRequest} />
      <p className='home-page-note'>The following articles are from the <span className='to-bold'>{section} Page</span> of the New York Times.</p>
      {articles.length ? <NewsArticlesContainer articles={articles} /> : <p>Loading ...</p>}
    </div>
  )
}

export default Landing