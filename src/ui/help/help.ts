import './help.scss';
import { createHTMLElement } from '../../helpers/create-html-element';

export const helpElement = () => {
  const help = createHTMLElement({ tag: 'button', classList: 'help' });

  return help;
};
