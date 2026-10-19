import { createHTMLElement } from '../helpers/create-html-element';

export const settingsElement = () => {
  const settings = createHTMLElement({ tag: 'div', textContent: 'Settings' });

  return settings;
};
