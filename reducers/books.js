import { SET_BOOKS } from '../actions/books';

const initialState = ['A', 'B', 'C'];

export const booksReducer = ( books = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return books.concat(action.payload)
        default:
            return books;
    }
}