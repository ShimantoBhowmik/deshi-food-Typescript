import { CATEGORIES_ACTION_TYPE, Category } from "./category-types";

import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer";

import { getCollectionAndDocuments } from "../../utils/firebase/firebase";


export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFail = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL, Error>;


export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFail;

export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart  => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START));


export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]):FetchCategoriesSuccess => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray));


export const fetchCategoriesFail = withMatcher((error: Error): FetchCategoriesFail => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL, error));


// export const fetchCategoriesAsync = () => async (dispatch) => {

//     dispatch(fetchCategoriesStart());
    
//     try{
//         const categoriesArray = await getCollectionAndDocuments('categories');
//         dispatch(fetchCategoriesSuccess(categoriesArray));
//     }catch(err) {
//         dispatch(fetchCategoriesFail(err));
//     }
    
// }