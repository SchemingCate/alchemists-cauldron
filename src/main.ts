import "./style.scss";

const appContainer = document.querySelector<HTMLElement>("#app");

if (!appContainer) throw new Error("App container is missing");

appContainer.innerHTML = `<h1>Alchemist's Cauldron</h1>`;
