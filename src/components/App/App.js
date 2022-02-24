import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from '../Landing/Landing'
import DetailedNewsArticle from '../DetailedNewsArticle/DetailedNewsArticle'
import nytimes from '../../assets/nytimes.png'

function App() {

  const [articles, setArticles] = useState([])
  const [section, setSection] = useState('Home')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE')
      .then(res => res.json())
      .then(data => {
        setArticles(data.results)
      })
      .catch(err => setError('Uh Oh! There was an error connecting to the NYT database.'))
  }, [])

  const sendRequest = (category) => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.results)
        const title = category.slice(0, 1).toUpperCase() + category.slice(1)
        setSection(title)
      })
      .catch(err => setError('Uh Oh! There was an error connecting to the NYT database.'))
  }

  return (
    <div>
      {error ? <p className='error-url-path'>{ error }</p> :
      <div className='App'>
        <header className='App-header'>
          <Link to='/' className='site-title'>
            <h1>NYT NEWS READER</h1>
            </Link>
            <img className='site-icon' src={nytimes} alt='Data powered by the NYT API'/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Landing sendRequest={sendRequest} articles={articles} section={section} />} />
            <Route path='/articles/:index' element={<DetailedNewsArticle articles={articles} />} />
            <Route path='/*' element={<p className='error-url-path'>404: This page does not exist. Sorry!</p>} />
          </Routes>
        </main>
      </div>
      }
    </div>
  );
}

export default App;
