import { CategoryItem } from '../categories/category-types';

import { CART_ACTIONS, CartItem } from "./cart-types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer";
import { ACTION_TYPES } from '../user/user-types';


const addCartItem = (cartItems: CartItem[], foodToAdd : CategoryItem): CartItem[] =>{
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

const removeCartItem = (cartItems: CartItem[], foodToRemove : CartItem): CartItem[] =>{
    const existingFood = cartItems.find((cartItem) => cartItem.id === foodToRemove.id)
    
    //if item number is equal to 1
    if (existingFood && existingFood.quantity ===1) {
    return cartItems.filter(cartItem => cartItem.id !== foodToRemove.id);
  }

   return cartItems.map((cartItem) =>
      cartItem.id === foodToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

}

const clearCartItem = (cartItems: CartItem[], foodToClear  : CategoryItem): CartItem[] =>{
    return cartItems.filter(cartItem => cartItem.id !== foodToClear.id);

}

export type SetIsCartOpen = ActionWithPayload<CART_ACTIONS.SET_CART_OPEN, boolean>; 

export type SetCartItems = ActionWithPayload<CART_ACTIONS.SET_CART_ITEMS, CartItem[]>; 





export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(CART_ACTIONS.SET_CART_OPEN, boolean));


export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTIONS.SET_CART_ITEMS, cartItems));


export const addItemToCart = (cartItems: CartItem[], foodToAdd: CategoryItem) =>{
    const newCartItems = addCartItem(cartItems, foodToAdd);
    return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[],foodToRemove: CartItem) =>{
    const newCartItems = removeCartItem(cartItems, foodToRemove);
    return setCartItems(newCartItems);
}
export const clearItemFromCart = (cartItems: CartItem[],foodToClear: CartItem) =>{
    const newCartItems = clearCartItem(cartItems, foodToClear);
    return setCartItems(newCartItems);
}

