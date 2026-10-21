import { createHTMLElement } from './helpers/create-html-element';
import { scoreElement } from './ui/score';
import { timeElement } from './ui/time';
import { helpElement } from './ui/help/help';
import { settingsElement } from './ui/settings/settings';
import {
  actionButtonInit,
  renderActionButton,
} from './ui/main-action-button/main-action-button';
import './style.scss';
import {
  ingredientsShelfInit,
  renderShelfIngredients,
} from './ui/ingredients-shelf/ingredients-shelf';
import {
  getCauldronCapacity,
  readGameState,
  updateToStartGameState,
} from './state/game-state';
import { cauldron } from './ui/cauldron/cauldron';
import { recipeBookInit, renderRecipeBook } from './ui/recipe-book/recipe-book';

const render = () => {
  const gameState = readGameState();
  renderActionButton(gameState.status);
  renderShelfIngredients(gameState.shelfStock);

  renderRecipeBook(
    gameState.status,
    gameState.cauldronIngredients.length,
    getCauldronCapacity(),
  );
};

const onActionButtonClick = () => {
  if (readGameState().status !== 'menu') {
    return;
  }

  updateToStartGameState();
  render();
};

const init = () => {
  const appContainer = document.querySelector<HTMLElement>('#app');
  if (!appContainer) throw new Error('App container is missing');

  const header = createHTMLElement({ tag: 'header' });
  const main = createHTMLElement({ tag: 'main' });
  main.append(ingredientsShelfInit(), cauldron(), recipeBookInit());
  const footer = createHTMLElement({ tag: 'footer' });
  footer.append(
    helpElement(),
    actionButtonInit(onActionButtonClick),
    settingsElement(),
  );
  appContainer.append(header, main, footer);
  header.append(scoreElement(), timeElement());
  render();
};

init();
