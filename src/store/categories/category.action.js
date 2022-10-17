import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

export const fetchCatecoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEORY_START);

export const fetchCatecoriesSucess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEORY_SUCCESS, categoriesArray);

export const fetchCatecoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEORY_FAILED, error);

export const fetchCategoriesAsync = () => (dispatch) => {
  const getCategoriesMap = async () => {
    dispatch(fetchCatecoriesStart())

    try {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(fetchCatecoriesSucess(categoriesArray));

    } catch (error) {
      dispatch(fetchCatecoriesFailed(error));
    }
  }
  getCategoriesMap()
} 