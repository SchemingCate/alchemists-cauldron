import './main-action-button.scss';
import { createHTMLElement } from '../../helpers/create-html-element';

export const actionButton = () => {
  const button = createHTMLElement({
    tag: 'button',
    textContent: 'Start game',
    classList: 'action-btn',
  });

  return button;
};
