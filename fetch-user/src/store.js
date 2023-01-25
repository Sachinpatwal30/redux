import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import usersReducer from './redux/users/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store= createStore(usersReducer,composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
