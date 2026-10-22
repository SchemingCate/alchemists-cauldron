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

export const addIngredientToCauldron = (ingredientId: string) => {
  const ingredient = INGREDIENTS.find((ing) => ing.id === ingredientId);
  if (!ingredient)
    throw new Error(`No data for ingredient with id: ${ingredientId}`);

  const currentStock = gameState.shelfStock[ingredientId];
  if (!currentStock)
    throw new Error(`No stock data for ingredient with id ${ingredientId}`);

  gameState.cauldronIngredients.push(ingredient);

  const newStockCount = currentStock - 1;
  gameState.shelfStock[ingredientId] = newStockCount;
};

export const isCauldronFull = (): boolean => {
  return getCauldronCapacity() <= gameState.cauldronIngredients.length;
};
