import renderToDom from '../utils/renderToDom';

const jokeBtn = () => {
  const domString = '<button class="btn btn-primary" id="joke-btn">Get a joke</button>';
  renderToDom('#joke-btn', domString);
};

const punchlineBtn = () => {
  const domString = '<button class="btn btn-primary" id="joke-btn">Get the punchline</button>';
  renderToDom('#punchline-btn', domString);
};

const resetBtn = () => {
  const domString = '<button class="btn btn-primary" id="joke-btn">Get another joke</button>';
  renderToDom('#reset-btn', domString);
};

export { jokeBtn, punchlineBtn, resetBtn };
