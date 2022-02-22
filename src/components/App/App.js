import './App.css';
import { useEffect } from 'react'
import Search from '../Search/Search'
import NewsArticlesContainer from '../NewsArticlesContainer/NewsArticlesContainer'

function App() {

  // useEffect(() => {
  //   fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE')
  //     .then(res => res.json())
  //     .then(data => console.log('response:', data))
  // }, [])

  const sendRequest = (category) => {
   console.log('category sent to App: ', category)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NYT NEWS READER</h1>
      </header>
      <main>
        <Search sendRequest={sendRequest}/>
        <NewsArticlesContainer />
      </main>
    </div>
  );
}

export default App;
