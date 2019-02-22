import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    changeShelf = event => {
        BooksAPI.update(this.props.bookData, event.target.value)
        .then(() => this.props.updateShelves(), () => alert('Erro ao mover livro de estante'))
    }

    render() {
        const { bookData } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${typeof bookData.imageLinks !== 'undefined' ? bookData.imageLinks.thumbnail: null}")` }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={bookData.shelf} onChange={this.changeShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookData.title}</div>
                <div className="book-authors">{Array.isArray(bookData.authors) && bookData.authors.map((author, index) => (<div key={index}>{author}<br /></div>))}</div>
            </div>
        )
    }
}

export default Book