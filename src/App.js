import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelf from './Shelf'

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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
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
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
