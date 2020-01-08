export const REQUEST_ASYNC = 'REQUEST_ASYNC';
export const SUCCESS_ASYNC = 'SUCCESS_ASYNC';
export const ERROR_ASYNC = 'ERROR_ASYNC';

export const requestAsync = ({ body, method, url, feature }) => ({
    type: `${feature} ${REQUEST_ASYNC}`,
    payload: body,
    meta: { method, url, feature }
});

export const successAsync = (response, feature) => ({
    type: `${feature} ${SUCCESS_ASYNC}`,
    payload: response,
    meta: { feature }
});

export const errorAsync = ({ error, feature }) => ({
    type: `${feature} ${ERROR_ASYNC}`,
    payload: error,
    meta: { feature }
});