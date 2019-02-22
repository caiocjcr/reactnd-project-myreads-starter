import React, { Component } from 'react'
import Book from './Book'

const Shelf = props => {
    const { title, books, updateShelves } = props;
    return (        
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">                        
                    {
                    books.map((book, index) => (
                    <li key={index}><Book bookData={book} updateShelves={updateShelves}/></li>)
                    )
                    }
                </ol>
            </div>
        </div>        
    )
}

export default Shelf