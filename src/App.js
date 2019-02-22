import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelf from './Shelf'
import { Route, Link } from 'react-router-dom';


const shelves = [
  {
    key: 'currentlyReading',
    title: 'Currently Reading'
  },
  {
    key: 'wantToRead',
    title: 'Want to Read'
  },
  {
    key: 'read',
    title: 'Read'
  },
]

class BooksApp extends React.Component {
  state = {    
    books: null
  }

  componentWillMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  updateShelves = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));    
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route path='/search' render={() => <Search updateShelves={this.updateShelves} alreadyInShelf={books}/>} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <button style={{height: '25px', width: '25px'}} onClick={() => console.log(books)} />
              <div>
                {books !== null &&
                shelves.map(shelf => (
                  <Shelf key={shelf.key} title={shelf.title} books={books.filter(book => book.shelf === shelf.key)} updateShelves={this.updateShelves}/>
                ))
                }
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>                
      </div>
    )
  }
}

export default BooksApp
