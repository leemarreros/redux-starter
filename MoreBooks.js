import React from 'react';
import { connect } from 'react-redux'

import { fetchBooks } from './actions/books'

import store from './store';

const Books = ({ books, fetchBooks }) => {
    return (
        <div>
            <button
                onClick={fetchBooks}>
                Fetch more books
			</button>
            <div>
                {books.map((book, i) => (<p key={i.toString()}>{i} - {book}</p>))}
            </div>
        </div>
    );
}


const mapStateToProps = ({ books }) => {
    return {
        books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: () => dispatch(fetchBooks({ query: 'last10' }))
    }
}

const MoreBooks = connect(
    mapStateToProps,
    mapDispatchToProps
)(Books)


export default MoreBooks;