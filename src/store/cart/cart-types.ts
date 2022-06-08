import { CategoryItem } from '../categories/category-types';

export enum CART_ACTIONS  {
    SET_CART_ITEMS =  'SET_CART_ITEMS',
    SET_CART_OPEN = 'SET_CART_OPEN',
    SET_CART_COUNT = 'SET_CART_COUNT',
    SET_CART_TOTAL = 'SET_CART_TOTAL',
}

export type CartItem = CategoryItem & {
    quantity: number;
  };