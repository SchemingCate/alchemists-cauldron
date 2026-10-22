import {
  addIngredientToCauldron,
  isCauldronFull,
  readGameState,
} from '../state/game-state';

export const addIngredient = (ingredientId: string) => {
  const gameState = readGameState();

  const isPlaying = gameState.status === 'playing';

  const isDepleted = (gameState.shelfStock[ingredientId] ?? 0) <= 0;

  if (!isPlaying || isDepleted || isCauldronFull()) return;

  addIngredientToCauldron(ingredientId);
};
