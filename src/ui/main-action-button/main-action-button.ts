import './main-action-button.scss';
import { createHTMLElement } from '../../helpers/create-html-element';
import type { GameStatus } from '../../helpers/types';

const button = createHTMLElement({
  tag: 'button',
  classList: 'action-btn',
});

export const actionButtonInit = (onClick: () => void) => {
  button.addEventListener('click', () => {
    onClick();
  });

  return button;
};

export const renderActionButton = (status: GameStatus) => {
  button.textContent = status === 'menu' ? 'Start Game' : 'Brew';
};
