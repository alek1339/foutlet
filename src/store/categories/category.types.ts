export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEORY_START = 'FETCH_CATEORY_START',
  FETCH_CATEORY_SUCCESS = 'FETCH_CATEORY_SUCCESS',
  FETCH_CATEORY_FAILED = 'FETCH_CATEORY_FAILED',
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
}