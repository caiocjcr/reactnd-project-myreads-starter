import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelf from './Shelf'
import { Route, Link } from 'react-router-dom';

const shelves = [
  {
    key: 'current',
    title: 'Currently Reading'
  },
  {
    key: 'want',
    title: 'Want to Read'
  },
  {
    key: 'read',
    title: 'Read'
  },
]

class BooksApp extends React.Component {
  state = {    
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' component={Search} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>                
                {shelves.map(shelf => (
                  <Shelf key={shelf.key} title={shelf.title} />
                ))}
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
