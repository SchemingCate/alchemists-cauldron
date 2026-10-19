import { createHTMLElement } from '../helpers/create-html-element';

export const timeElement = () => {
  const container = createHTMLElement({ tag: 'div' });
  const timeText = createHTMLElement({ tag: 'span', textContent: 'Time:' });
  const timeCount = createHTMLElement({ tag: 'span', textContent: '0:00' });

  container.append(timeText, timeCount);
  return container;
};
