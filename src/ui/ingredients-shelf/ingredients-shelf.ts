import './ingredients-shelf.scss';
import ingredientIcon from '../../assets/images/icons/ingredients/dragon-tears.svg';
import { createHTMLElement } from '../../helpers/create-html-element';

export const ingredientsShelf = () => {
  const shelf = createHTMLElement({ tag: 'div', classList: 'shelf' });

  const ingredient = createHTMLElement({
    tag: 'button',
    classList: 'shelf_ingredient',
  });

  const ingredientName = createHTMLElement({
    tag: 'span',
    classList: 'shelf_ingredient_name',
    textContent: 'Dragon Tears',
  });

  const ingredientImage = createHTMLElement({
    tag: 'img',
    classList: 'shelf_ingredient_image',
    attributes: [
      ['alt', 'Dragon Tears'],
      ['src', ingredientIcon],
    ],
  });

  const ingredientStats = createHTMLElement({
    tag: 'div',
    classList: 'shelf_ingredient_stats',
  });

  const temporary = createHTMLElement({ tag: 'span', textContent: 'T25' });
  const density = createHTMLElement({ tag: 'span', textContent: 'D8' });
  const magicPower = createHTMLElement({ tag: 'span', textContent: 'MP10' });

  const count = createHTMLElement({ tag: 'span', textContent: 'x3' });
  ingredientStats.append(temporary, density, magicPower, count);

  ingredient.append(ingredientImage, ingredientName, ingredientStats);

  shelf.append(ingredient);
  return shelf;
};
