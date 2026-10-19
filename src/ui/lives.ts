import { createHTMLElement } from '../helpers/create-html-element';

export const livesElement = () => {
  const lives = createHTMLElement({ tag: 'div', textContent: 'Lives' });

  return lives;
};
