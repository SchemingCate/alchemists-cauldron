import {
  addIngredientToCauldron,
  getCauldronCapacity,
  readGameState,
} from '../state/game-state';

export const addIngredient = (ingredientId: string) => {
  const gameState = readGameState();

  const isPlaying = gameState.status === 'playing';
  const isFull = gameState.cauldronIngredients.length >= getCauldronCapacity();

  const isDepleted = (gameState.shelfStock[ingredientId] ?? 0) <= 0;

  if (!isPlaying || isFull || isDepleted) return;

  addIngredientToCauldron(ingredientId);
};
