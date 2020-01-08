import { BOOKS, FETCH_BOOKS, setBooks } from '../actions/books';
import { ERROR_ASYNC, SUCCESS_ASYNC, requestAsync } from '../actions/api';

export const booksMiddleware = () => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_BOOKS:
            next(
                requestAsync({
                    body: null,
                    method: 'GET',
                    url: 'BOOKS_URL',
                    feature: BOOKS,
                })
            );
                break;
        case `${BOOKS} ${SUCCESS_ASYNC}`:
            next(setBooks({ books: action.payload }))
            break;
        case `${BOOKS} ${ERROR_ASYNC}`:
            console.log('Do other things when error happens')
            break;
    }
}