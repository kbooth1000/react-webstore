import { combineReducers } from 'redux';
import { ADD_TO_CART } from '../actions/action-types';
import { UPDATE_CART } from '../actions/action-types';
import { DELETE_FROM_CART } from '../actions/action-types';
import { ACTIVATE_CATEGORY } from '../actions/action-types';
import { ACTIVATE_PRODUCT } from '../actions/action-types';

const initialProductsState = {
    activeCategoryId: 1,
    activeProduct: [{ name: 'Coffee Maker', categoryId: 2, price: 19.99 }],
    categories: [
        { name: 'Technology', id: 1 },
        { name: 'Coffee', id: 2 },
        { name: 'Educational', id: 3 },
        { name: 'Board Games', id: 4 },
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

const initialCartState = {
    cart: [
        {
            product: 'Coffee Maker',
            quantity: 2,
            unitCost: 55
        },
        {
            product: 'Werewolf',
            quantity: 1,
            unitCost: 55
        }
    ]
};

const productsReducer = function (state = initialProductsState, action) {
    switch (action.type) {
        case ACTIVATE_CATEGORY: {
            return {
                ...state,
                activeCategoryId: action.payload.categoryid
            }
        }
        case ACTIVATE_PRODUCT: {
            return {
                ...state,
                activeProduct: [action.payload.product]
            }
        }
        default:
        return state;
    }
};

    let cartReducer = function (state = initialCartState, action) {
        switch (action.type) {
            case ADD_TO_CART: {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }

            case UPDATE_CART: {
                return {
                    ...state,
                    cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
                }
            }

            case DELETE_FROM_CART: {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.product !== action.payload.product)
                }
            }
            default:
            return state;
        }
    };

    const allReducers = {
        products: productsReducer,
        shoppingCart: cartReducer
    }

    let rootReducer = combineReducers(allReducers);

    export default rootReducer;