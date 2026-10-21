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

const ingredientsInTheCauldronElement = createHTMLElement({
  tag: 'span',
  textContent: ' ',
});

const ingredientsMaxElement = createHTMLElement({
  tag: 'span',
  textContent: ' ',
});

export const recipeBookInit = () => {
  const container = createHTMLElement({
    tag: 'div',
    classList: 'book-container',
  });
  const recipeText = createHTMLElement({
    tag: 'div',
    classList: 'book_text',
  });
  const ingredientsCount = createHTMLElement({ tag: 'div' });
  const ingredientsCountText = createHTMLElement({
    tag: 'span',
    textContent: 'Ingredients: ',
  });
  const ingredientsCountSlash = createHTMLElement({
    tag: 'span',
    textContent: ' / ',
  });

  ingredientsCount.append(
    ingredientsCountText,
    ingredientsInTheCauldronElement,
    ingredientsCountSlash,
    ingredientsMaxElement,
  );
  recipeText.append(ingredientsCount);

  openBook.append(recipeText);
  container.append(openBook, closedBook);
  return container;
};

export const renderRecipeBook = (
  status: GameStatus,
  cauldronIngredientsCount: number,
  cauldronCapacity: number,
) => {
  const isOpen = status === 'playing';
  closedBook.classList.toggle('book--active', !isOpen);
  openBook.classList.toggle('book--active', isOpen);

  ingredientsInTheCauldronElement.textContent =
    cauldronIngredientsCount.toString();

  ingredientsMaxElement.textContent = cauldronCapacity.toString();
};
