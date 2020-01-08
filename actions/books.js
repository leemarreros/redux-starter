// this would be the feature name - it helps to know what's being called
export const BOOKS = '[Books]';

export const SET_BOOKS = `${BOOKS} SET`;
export const FETCH_BOOKS = `${BOOKS} FETCH`;

export const setBooks = ({ books }) => ({
    type: SET_BOOKS,
    payload: books
})

export const fetchBooks = ({ query }) => ({
    type: FETCH_BOOKS,
    payload: query
})