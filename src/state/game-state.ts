import { INGREDIENTS } from '../data/ingredients';
import { RECIPES } from '../data/recipes';
import { createStock } from '../logic/create-stock';
import type { IGameState } from '../helpers/types';

export const createMenuGameState = () => {
  const recipe = RECIPES.find((r) => r.difficulty === 'medium');
  if (!recipe) throw new Error('No medium level recipe in the data');

  const state: IGameState = {
    status: 'menu',
    score: 0,
    timeLeft: 0,
    lives: 0,
    activeRecipe: recipe,
    cauldronIngredients: [],
    shelfStock: {},
  };

  return state;
};

const gameState: IGameState = createMenuGameState();

export const readGameState = (): Readonly<IGameState> => {
  return gameState;
};

export const updateToStartGameState = () => {
  // rules for the first story
  const shelfIngredients = INGREDIENTS.slice(0, 6);

  gameState.status = 'playing';
  gameState.timeLeft = 150;
  gameState.lives = 3;
  gameState.shelfStock = createStock(shelfIngredients);
};
