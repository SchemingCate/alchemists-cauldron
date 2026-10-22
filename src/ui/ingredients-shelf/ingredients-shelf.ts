import './ingredients-shelf.scss';
import { createHTMLElement } from '../../helpers/create-html-element';
import type { IIngredient } from '../../helpers/types';
import { INGREDIENTS } from '../../data/ingredients';

const shelf = createHTMLElement({ tag: 'div', classList: 'shelf' });

export const ingredientsShelfInit = (
  onIngredientClick: (ingredientId: string) => void,
) => {
  shelf.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const element = target.closest('.shelf_ingredient');
    if (!(element instanceof HTMLElement)) return;
    const ingredientId = element.dataset.ingredientId;
    if (!ingredientId)
      throw new Error('No id in dataset for clicked ingredient');
    onIngredientClick(ingredientId);
  });
  const container = createHTMLElement({
    tag: 'div',
    classList: 'shelf-container',
  });
  container.append(shelf);
  return container;
};

const createIngredientElement = (
  ingredientData: IIngredient,
  countNumber: number,
  isCauldronFull: boolean,
): HTMLButtonElement => {
  const ingredient = createHTMLElement({
    tag: 'button',
    classList: 'shelf_ingredient',
    attributes: [['data-ingredient-id', ingredientData.id]],
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
      ['src', ingredientData.icon],
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
    textContent: countNumber.toString(),
    classList: 'shelf_ingredient_count',
  });

  const isDepleted = countNumber <= 0;

  ingredient.disabled = isDepleted || isCauldronFull;

  ingredient.classList.toggle('shelf_ingredient--depleted', isDepleted);

  ingredient.classList.toggle('shelf_ingredient--blocked', isCauldronFull);

  ingredientStats.append(temperature, density, magicPower);

  ingredient.append(ingredientImage, ingredientName, ingredientStats, count);

  return ingredient;
};

export const renderShelfIngredients = (
  stock: Record<string, number>,
  isCauldronFull: boolean,
) => {
  const ingredientsStock = stock;

  const ingredientElements: HTMLButtonElement[] = [];

  for (const [id, count] of Object.entries(ingredientsStock)) {
    const ingredientData = INGREDIENTS.find(
      (ingredient) => ingredient.id === id,
    );
    if (!ingredientData) throw new Error(`Can't find ingredient with id ${id}`);
    ingredientElements.push(
      createIngredientElement(ingredientData, count, isCauldronFull),
    );
  }

  shelf.replaceChildren(...ingredientElements);
};
