import { createHTMLElement } from '../../helpers/create-html-element';

export const recipeBook = () => {
  const container = createHTMLElement({ tag: 'div', textContent: 'Recipe' });
  return container;
};
