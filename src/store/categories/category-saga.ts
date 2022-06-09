import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import { getCollectionAndDocuments } from '../../utils/firebase/firebase';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFail,
} from './category-action';

import { CATEGORIES_ACTION_TYPE } from './category-types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCollectionAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFail(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}