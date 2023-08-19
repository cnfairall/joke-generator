import renderToDom from '../utils/renderToDom';

const showSetup = (response) => {
  const setup = `<p>${response.setup}</p>`;
  renderToDom('#joke-setup', setup);
};

const showPunchline = (response) => {
  const punchline = `<p>${response.delivery}</p>`;
  renderToDom('#joke-punchline', punchline);
};

export { showSetup, showPunchline };
