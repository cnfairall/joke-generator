import getJoke from '../api/jokeAPI';
import { jokeBtn, punchlineBtn, resetBtn } from '../components/buttons';
import { showSetup, showPunchline } from '../pages/jokes';
import clearDom from '../utils/clearDom';
import domBuilder from '../utils/domBuilder';

const domEvents = () => {
  getJoke().then((joke) => {
    document.querySelector('#joke-btn').addEventListener('click', () => {
      showSetup(joke);
      document.querySelector('#joke-btn').innerHTML = '';
      punchlineBtn();
    });
    document.querySelector('#punchline-btn').addEventListener('click', () => {
      showPunchline(joke);
      document.querySelector('#punchline-btn').innerHTML = '';
      resetBtn();
    });
  });
  document.querySelector('#reset-btn').addEventListener('click', () => {
    clearDom();
    domBuilder();
    jokeBtn();
    domEvents();
  });
};

export default domEvents;
