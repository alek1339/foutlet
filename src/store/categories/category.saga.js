import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCatecoriesSucess, fetchCatecoriesFailed } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';



export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments('categories'));
    yield put(fetchCatecoriesSucess(categoriesArray))

  } catch (error) {
    yield put(fetchCatecoriesFailed(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEORY_START,)
}

export function* categoriesSaga() {
  yield all([]);
}