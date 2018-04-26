import {ADD_TO_CART, ACTIVATE_CATEGORY, ACTIVATE_PRODUCT} from '../actions/action-types';
import {UPDATE_CART} from  '../actions/action-types';
import {DELETE_FROM_CART} from  '../actions/action-types';


export let activateCategory = (category) => {
    return {
        type: ACTIVATE_CATEGORY,
        payload: {categoryid:category.id}
    };
};

export let activateProduct = (product) => {
    return {
        type: ACTIVATE_PRODUCT,
        payload: {product}
    };
};

export let addToCart = (product, quantity, unitCost) => {
    return {
        type: ADD_TO_CART,
        payload: {product, quantity, unitCost}
    };
};

export let updateCart = (product, quantity, unitCost ) => {
    return {
        type: UPDATE_CART,
        payload: {
            product, quantity, unitCost
        }
    }
}

export let deleteFromCart = (product) => {
    return {
      type: DELETE_FROM_CART,
      payload: {
        product
      }
    }
  }

export default {addToCart, updateCart, deleteFromCart};