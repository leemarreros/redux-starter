import { REQUEST_ASYNC, successAsync, errorAsync } from '../actions/api';

const response = ['D', 'E', 'F'];

var fetching = function ( url, object) {
    return new Promise(function(resolve) { 
        setTimeout(() => resolve(response), 1000)
    });
}

export const apiMiddleware = ({ dispatch }) => next => action => {
    next(action);
    if (action.type.includes(REQUEST_ASYNC)) {
        const { url, method, feature } = action.meta;
        fetching(url, { method })
            // .then(response => response.json())
            .then(data => dispatch(successAsync(data, feature)))
            .catch(error => dispatch(errorAsync(error, feature)));
    }
}