export type Difficulty = 'easy' | 'medium' | 'hard';
export type GameStatus = 'menu' | 'playing' | 'paused' | 'game-over';

export interface IIngredient {
  readonly id: string;
  readonly name: string;
  readonly icon: string;
  readonly temperature: number;
  readonly density: number;
  readonly magicPower: number;
}

interface IRecipeRange {
  readonly min: number;
  readonly max: number;
}

export interface IRecipe {
  readonly id: string;
  readonly name: string;
  readonly difficulty: Difficulty;
  readonly temperature: IRecipeRange;
  readonly density: IRecipeRange;
  readonly magicPower: IRecipeRange;
}

export interface IGameState {
  status: GameStatus;
  score: number;
  timeLeft: number;
  lives: number;
  activeRecipe: IRecipe;
  cauldronIngredients: IIngredient[];
  shelfStock: Record<string, number>; // ingredient id -> portions left
  difficulty: Difficulty;
  lastReactionId?: string | null; // Level 3+
}

export interface IReaction {
  id: string;
  name: string;
  difficulty: Exclude<Difficulty, 'easy'>;
  isActive: (ingredients: IIngredient[]) => boolean;
  apply: (values: {
    temperature: number;
    density: number;
    magicPower: number;
  }) => {
    temperature: number;
    density: number;
    magicPower: number;
  };
}

export interface IDifficultyValues {
  readonly ingredientsOnShelf: number;
  readonly cauldronCapacity: number;
  readonly startTime: number;
  readonly recipeTolerance: number;
  readonly lives: number;
  readonly scorePerBrew: number;
  readonly timeBonus: number;
}
