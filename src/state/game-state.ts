import { INGREDIENTS } from '../data/ingredients';
import { RECIPES } from '../data/recipes';
import { createStock } from '../logic/create-stock';
import type { IGameState } from '../helpers/types';
import { DEFAULT_DIFFICULTY, DIFFICULTIES } from '../data/difficulties';

export const createMenuGameState = () => {
  const recipe = RECIPES.find((r) => r.difficulty === DEFAULT_DIFFICULTY);
  if (!recipe)
    throw new Error(`No ${DEFAULT_DIFFICULTY} level recipe in the data`);

  const state: IGameState = {
    status: 'menu',
    score: 0,
    timeLeft: 0,
    lives: 0,
    activeRecipe: recipe,
    cauldronIngredients: [],
    shelfStock: {},
    difficulty: DEFAULT_DIFFICULTY,
  };

  return state;
};

const gameState: IGameState = createMenuGameState();

export const getCauldronCapacity = (): number => {
  return DIFFICULTIES[gameState.difficulty].cauldronCapacity;
};

export const readGameState = (): Readonly<IGameState> => {
  return gameState;
};

export const updateToStartGameState = () => {
  const rules = DIFFICULTIES[gameState.difficulty];

  const shelfIngredients = INGREDIENTS.slice(0, rules.ingredientsOnShelf);

  gameState.status = 'playing';
  gameState.timeLeft = rules.startTime;
  gameState.lives = rules.lives;
  gameState.shelfStock = createStock(shelfIngredients);
};
