import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
    activeCategoryId: 1,
    activeItem: null, 
    categories: [
        { name: 'Technology', id:1 },
        { name: 'Coffee', id:2 },
        { name: 'Educational', id:3 },
        { name: 'Board Games', id:4 },
    ],
    items: [
        { name: 'Coffee Maker', categoryId: 2, price: 19.99 },
        { name: 'Filters', categoryId: 2, price: 1.59 },
        { name: 'Creamer', categoryId: 2, price: 3.19 },
        { name: 'Redux Help', categoryId: 3, price: 9.99 },
        { name: 'Super Amazing Computer', categoryId: 1, price: 10000 },
        { name: 'Werewolf', categoryId: 4, price: 14.99 }
    ],
    users: [
        { firstname: 'Seth', lastname: 'Zim' },
        { firstname: 'Jonathan', lastname: 'Martin' },
        { firstname: 'Joshua', lastname: 'Martin' }
    ]
};

let rootReducer = (state = initialState, action) => {
    return state;
};

const store = createStore(rootReducer);

// window.store = store;


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));