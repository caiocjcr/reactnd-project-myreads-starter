import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    getAuthors = book => {
        const authors = [];
        book.authors.map(author => authors.push(author));
        return authors;
    }

    render() {
        const { title, books } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">                        
                        {
                        books.map((book, index) => (
                        <li key={index}><Book bookTitle={book.title} bookAuthors={this.getAuthors(book)} backgroundImage={book.imageLinks.thumbnail} shelf={book.shelf} /></li>)
                        )
                        }         
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf