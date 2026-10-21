import './recipe-book.scss';
import { createHTMLElement } from '../../helpers/create-html-element';
import type { GameStatus } from '../../helpers/types';

const closedBook = createHTMLElement({
  tag: 'div',
  classList: 'book book--closed',
});

const openBook = createHTMLElement({
  tag: 'div',
  classList: 'book book--open',
});

export const recipeBookInit = () => {
  const container = createHTMLElement({
    tag: 'div',
    classList: 'book-container',
  });
  container.append(openBook, closedBook);
  return container;
};

export const renderRecipeBook = (status: GameStatus) => {
  const isOpen = status === 'playing';
  closedBook.classList.toggle('book--active', !isOpen);
  openBook.classList.toggle('book--active', isOpen);
};
