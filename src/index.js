import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducerAddUser from './store/reducer/reducerAddUser';
import reducerBankAccount from './store/reducer/reducerBankAccount';


const rootReducer = combineReducers({
    users: reducerAddUser,
    bankAccount:reducerBankAccount
});

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
