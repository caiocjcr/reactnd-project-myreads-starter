import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults';

class Search extends Component {
    state = {
        searchText: '',
        foundBooks: []
    }

    handleChange = (event) => {
        const txt = event.target.value;
        this.setState(currentState => ({
            searchText: txt
        }))
        this.fetchBooks(txt);
    }

    fetchBooks = query => {
        BooksAPI.search(query)
        .then(books => books !== undefined ? this.handleFoundBooks(books) : this.setState({ foundBooks: [] }))
    }

    handleFoundBooks = books => {
        if(this.state.searchText.length === 0 || books.error) {
            this.setState({ foundBooks: [] });
        } else {
            for(let i = 0; i < books.length; i++){
                books[i].shelf = 'none'
                for(const bookInShelf of this.props.alreadyInShelf){
                    if(books[i].id === bookInShelf.id) {
                        books[i].shelf = bookInShelf.shelf
                    }
                }
            }
            console.log(books)
            this.setState({ foundBooks: books });
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input value={this.state.searchText} onChange={this.handleChange} type="text" placeholder="Search by title or author"/>                        
                    </div>
                </div>
                <SearchResults books={this.state.foundBooks} updateShelves={this.props.updateShelves}/>
            </div>
        )
    }
}

export default Search