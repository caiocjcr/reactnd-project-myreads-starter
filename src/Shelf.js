import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">                        
                        <li><Book bookTitle='Test Title' bookAuthors={['Test Author', 'Author Test']} backgroundImage="" /></li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf