import { AnyAction } from "redux";

import { Category } from "./category.types";

import { fetchCatecoriesFailed, fetchCatecoriesStart, fetchCatecoriesSucess } from "./category.action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {

  if (fetchCatecoriesStart.match(action)) {
    return { ...state, isLoading: true }
  }

  if (fetchCatecoriesSucess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false }
  }

  if (fetchCatecoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false }
  }

  return state;
} 