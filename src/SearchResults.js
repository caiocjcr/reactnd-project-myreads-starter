import React from 'react';
import Book from './Book'

const SearchResults = props => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {
                props.books.map((book, index) => (
                <li key={index}><Book bookData={book} updateShelves={props.updateShelves}/></li>)                        )
                }  
            </ol>
        </div>
    )
}

export default SearchResults