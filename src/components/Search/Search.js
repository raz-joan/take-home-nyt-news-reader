import React, {useState} from 'react'
import './Search.css'

const Search = ({ sendRequest }) => {

  const [category, setCategory] = useState('')

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('search button clicked with category: ', category)
    sendRequest(category)
    setCategory('')
  }

  return (
    <form id='search-category-form'>
      <label htmlFor="category-select">Choose an article category:</label>
      <select name="categories" id="category-select" value={category} onChange={e => handleChange(e)}>
        <option value="">--Please choose an option--</option>
        <option value="arts">Arts</option>
        <option value="automobiles">Automobiles</option>
        <option value="books">Books</option>
        <option value="business">Business</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
        <option value="health">Health</option>
        <option value="home">Home</option>
        <option value="insider">Insider</option>
        <option value="magazine">Magazine</option>
        <option value="movies">Movies</option>
        <option value="nyregion">NY Region</option>
        <option value="obituaries">Obituaries</option>
        <option value="opinion">Opinion</option>
        <option value="politics">Politics</option>
        <option value="realestate">Real Estate</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="sundayreview">Sunday Review</option>
        <option value="technology">Technology</option>
        <option value="theater">Theater</option>
        <option value="travel">Travel</option>
        <option value="upshot">Upshot</option>
        <option value="us">U.S.</option>
        <option value="world">World</option>
      </select>
      <button onClick={e => {handleSubmit(e)}}>See articles in this category!</button>
    </form>
  )
}

export default Search