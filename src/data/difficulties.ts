import type { Difficulty, IDifficultyValues } from '../helpers/types';

export const DEFAULT_DIFFICULTY: Difficulty = 'medium';

export const DIFFICULTIES: Readonly<
  Record<Difficulty, Readonly<IDifficultyValues>>
> = {
  easy: {
    ingredientsOnShelf: 4,
    cauldronCapacity: 4,
    startTime: 180,
    recipeTolerance: 12,
    lives: 5,
    scorePerBrew: 100,
    timeBonus: 15,
  },
  medium: {
    ingredientsOnShelf: 6,
    cauldronCapacity: 4,
    startTime: 150,
    recipeTolerance: 8,
    lives: 3,
    scorePerBrew: 200,
    timeBonus: 10,
  },
  hard: {
    ingredientsOnShelf: 8,
    cauldronCapacity: 5,
    startTime: 150,
    recipeTolerance: 5,
    lives: 3,
    scorePerBrew: 300,
    timeBonus: 5,
  },
};
