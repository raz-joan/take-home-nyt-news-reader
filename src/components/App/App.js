import './App.css';
import { useEffect, useState } from 'react'
import Search from '../Search/Search'
import NewsArticlesContainer from '../NewsArticlesContainer/NewsArticlesContainer'

function App() {

  const [articles, setArticles] = useState([])
  const [section, setSection] = useState('Home')

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE')
      .then(res => res.json())
      .then(data => {
        console.log('home response:', data)
        setArticles(data.results)
      })
  }, [])

  const sendRequest = (category) => {
    console.log('category sent to App: ', category)
    console.log('current articles: ', articles)
    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE`)
      .then(res => res.json())
      .then(data => {
        console.log('category response:', data)
        setArticles(data.results)
        const title = category.slice(0, 1).toUpperCase() + category.slice(1)
        setSection(title)
      })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>NYT NEWS READER</h1>
      </header>
      <main className='App-body'>
        <Search sendRequest={sendRequest} />
        <p className='home-page-note'>The following articles are from the <span className='to-bold'>{section} Page</span> of the New York Times.</p>
        {articles.length ? <NewsArticlesContainer articles={articles} /> : <p>Loading ...</p>}
      </main>
    </div>
  );
}

export default App;
