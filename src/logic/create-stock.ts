import type { IIngredient } from '../helpers/types';

const STOCK_MIN = 2;
const STOCK_MAX = 15;

export const createStock = (ingredients: IIngredient[]) => {
  const stockRecord: Record<string, number> = {};
  for (const ingredient of ingredients) {
    const randomStock =
      Math.floor(Math.random() * (STOCK_MAX - STOCK_MIN + 1)) + STOCK_MIN;
    stockRecord[ingredient.id] = randomStock;
  }
  return stockRecord;
};
