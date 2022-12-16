import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category, CategoryItem } from "./category.types";

export type FetCategoriesStartAction =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEORY_START>;

export type FetCategoriesSuccessAction = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEORY_SUCCESS,
  Category[]
>;

export type FetCategoriesFailedAction = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEORY_FAILED,
  Error
>;

export type CategoryAction =
  FetCategoriesStartAction | FetCategoriesSuccessAction | FetCategoriesFailedAction;

export const fetchCatecoriesStart = withMatcher((): FetCategoriesStartAction =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEORY_START));

export const fetchCatecoriesSucess = withMatcher((categoriesArray: Category[]): FetCategoriesSuccessAction =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEORY_SUCCESS, categoriesArray));

export const fetchCatecoriesFailed = withMatcher((error: Error): FetCategoriesFailedAction =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEORY_FAILED, error));
