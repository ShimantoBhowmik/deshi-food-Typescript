import { CART_ACTIONS } from "./cart-types";
import { createAction } from "../../utils/reducer/reducer";


const addCartItem = (cartItems, foodToAdd) =>{
    const existingFood = cartItems.find((cartItem) => cartItem.id === foodToAdd.id)

    if (existingFood) {
    return cartItems.map((cartItem) =>
      cartItem.id === foodToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }


    return [...cartItems, { ...foodToAdd, quantity:1 }];
}

const removeCartItem = (cartItems, foodToRemove) =>{
    const existingFood = cartItems.find((cartItem) => cartItem.id === foodToRemove.id)
    
    //if item number is equal to 1
    if (existingFood.quantity ===1) {
    return cartItems.filter(cartItem => cartItem.id !== foodToRemove.id);
  }

   return cartItems.map((cartItem) =>
      cartItem.id === foodToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

}

const clearCartItem = (cartItems, foodToClear) =>{
    return cartItems.filter(cartItem => cartItem.id !== foodToClear.id);

}


export const setIsCartOpen = (boolean) => createAction(CART_ACTIONS.SET_CART_OPEN, boolean);                


export const addItemToCart = (cartItems, foodToAdd) =>{
    const newCartItems = addCartItem(cartItems, foodToAdd);
    return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}

export const removeItemFromCart = (cartItems,foodToRemove) =>{
    const newCartItems = removeCartItem(cartItems, foodToRemove);
    return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}
export const clearItemFromCart = (cartItems,foodToClear) =>{
    const newCartItems = clearCartItem(cartItems, foodToClear);
    return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}

