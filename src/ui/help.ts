import { createHTMLElement } from '../helpers/create-html-element';

export const helpElement = () => {
  const help = createHTMLElement({ tag: 'div', textContent: 'Help' });

  return help;
};
