import { CATEGORIES_ACTION_TYPE } from "./category-types";

import { createAction } from "../../utils/reducer/reducer";

import { getCollectionAndDocuments } from "../../utils/firebase/firebase";



export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);


export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);


export const fetchCategoriesFail = (error) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL, error);


export const fetchCategoriesAsync = () => async (dispatch) => {

    dispatch(fetchCategoriesStart());
    
    try{
        const categoriesArray = await getCollectionAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }catch(err) {
        dispatch(fetchCategoriesFail(err));
    }
    
}