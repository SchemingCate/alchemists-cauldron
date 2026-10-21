import './ingredients-shelf.scss';
import ingredientIcon from '../../assets/images/icons/ingredients/dragon-tears.svg';
import { createHTMLElement } from '../../helpers/create-html-element';
import type { IIngredient } from '../../helpers/types';
import { INGREDIENTS } from '../../data/ingredients';

const shelf = createHTMLElement({ tag: 'div', classList: 'shelf' });

export const ingredientsShelfInit = () => {
  return shelf;
};

const createIngredientElement = (
  ingredientData: IIngredient,
  countNumber: number,
): HTMLButtonElement => {
  const ingredient = createHTMLElement({
    tag: 'button',
    classList: 'shelf_ingredient',
  });

  const ingredientName = createHTMLElement({
    tag: 'span',
    classList: 'shelf_ingredient_name',
    textContent: ingredientData.name,
  });

  const ingredientImage = createHTMLElement({
    tag: 'img',
    classList: 'shelf_ingredient_image',
    attributes: [
      ['alt', ingredientData.name],
      ['src', ingredientIcon],
    ],
  });

  const ingredientStats = createHTMLElement({
    tag: 'div',
    classList: 'shelf_ingredient_stats',
  });

  const temperature = createHTMLElement({
    tag: 'span',
    textContent: `T${ingredientData.temperature.toString()}`,
  });
  const density = createHTMLElement({
    tag: 'span',
    textContent: `D${ingredientData.density.toString()}`,
  });
  const magicPower = createHTMLElement({
    tag: 'span',
    textContent: `MP${ingredientData.magicPower.toString()}`,
  });

  const count = createHTMLElement({
    tag: 'span',
    textContent: `x${countNumber.toString()}`,
  });

  if (countNumber === 0) {
    ingredient.classList.add('shelf_ingredient--inactive');
  }

  ingredientStats.append(temperature, density, magicPower, count);

  ingredient.append(ingredientImage, ingredientName, ingredientStats);

  return ingredient;
};

export const renderShelfIngredients = (stock: Record<string, number>) => {
  const ingredientsStock = stock;

  const ingredientElements: HTMLButtonElement[] = [];

  for (const [id, count] of Object.entries(ingredientsStock)) {
    const ingredientData = INGREDIENTS.find(
      (ingredient) => ingredient.id === id,
    );
    if (!ingredientData) throw new Error(`Can't find ingredient with id ${id}`);
    ingredientElements.push(createIngredientElement(ingredientData, count));
  }

  shelf.replaceChildren(...ingredientElements);
};
