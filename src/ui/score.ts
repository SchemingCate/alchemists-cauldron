import { createHTMLElement } from '../helpers/create-html-element';

export const scoreElement = () => {
  const container = createHTMLElement({ tag: 'div' });
  const scoreText = createHTMLElement({ tag: 'span', textContent: 'Score:' });
  const scoreCount = createHTMLElement({ tag: 'span', textContent: '0' });

  container.append(scoreText, scoreCount);
  return container;
};
