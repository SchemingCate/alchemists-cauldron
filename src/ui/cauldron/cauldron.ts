import { createHTMLElement } from '../../helpers/create-html-element';
import './cauldron.scss';

export const cauldron = () => {
  const container = createHTMLElement({ tag: 'div' });
  const hearth = createHTMLElement({ tag: 'div', classList: 'hearth' });
  const cauldron = createHTMLElement({ tag: 'div', classList: 'cauldron' });
  const fire = createHTMLElement({ tag: 'div', classList: 'fire' });
  hearth.append(cauldron, fire);
  container.append(hearth);

  return container;
};
