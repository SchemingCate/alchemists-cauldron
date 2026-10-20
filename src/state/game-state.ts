import { INGREDIENTS } from '../data/ingredients';
import { RECIPES } from '../data/recipes';
import { createStock } from '../logic/create-stock';
import type { IGameState } from '../helpers/types';

export const createStartingState = () => {
  const shelfIngredients = INGREDIENTS.slice(0, 6);
  const recipe = RECIPES.find((r) => r.difficulty === 'medium');
  if (!recipe) throw new Error('No medium level recipe in the data');

  const state: IGameState = {
    status: 'menu',
    score: 0,
    timeLeft: 150,
    lives: 3,
    activeRecipe: recipe,
    cauldronIngredients: [],
    shelfStock: createStock(shelfIngredients),
  };

  return state;
};
