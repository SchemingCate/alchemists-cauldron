import './ingredients-shelf.scss';
import { createHTMLElement } from '../../helpers/create-html-element';

export const ingredientsShelf = () => {
  const shelf = createHTMLElement({ tag: 'div', classList: 'shelf' });

  const ingredient = createHTMLElement({
    tag: 'button',
    classList: 'shelf_ingredient',
    textContent: 'Ingredient',
  });

  shelf.append(ingredient);
  return shelf;
};
