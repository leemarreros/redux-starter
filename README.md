Middleware
- receives the action dispatched before the reducers
- can dispatch another actions since it has access to the store and can read all the actions being dispatched
- help us to dispatch plain objects for making async calls. The async call is handled in the middleware
- when the async call is completed (success or error), it dispatches another actions that could be processed in the middleware or sent the response to the reducers

Api middleware
- requestAsync: here the actual async call is made
- successAsync: fired when the async call returns a succesful response
- errorAsync: fired when the asyn call has issues
