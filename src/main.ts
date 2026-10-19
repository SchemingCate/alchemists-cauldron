import { createHTMLElement } from './helpers/create-html-element';
import { scoreElement } from './ui/score';
import { timeElement } from './ui/time';
import { helpElement } from './ui/help';
import { settingsElement } from './ui/settings';
import { actionButton } from './ui/main-action-button/main-action-button';
import './style.scss';

const appContainer = document.querySelector<HTMLElement>('#app');

if (!appContainer) throw new Error('App container is missing');

const header = createHTMLElement({ tag: 'header' });

const main = createHTMLElement({ tag: 'main', textContent: 'main' });
const footer = createHTMLElement({ tag: 'footer' });

footer.append(helpElement(), actionButton(), settingsElement());

appContainer.append(header, main, footer);

header.append(scoreElement(), timeElement());
