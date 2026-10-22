import './settings.scss';
import { createHTMLElement } from '../../helpers/create-html-element';

export const settingsElement = () => {
  const settings = createHTMLElement({ tag: 'button', classList: 'settings' });

  return settings;
};
