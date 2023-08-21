import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

import domBuilder from '../utils/domBuilder';
import domEvents from '../events/domEvents';
import { jokeBtn } from '../components/buttons';

const init = () => {
  domBuilder();
  jokeBtn();
  domEvents();
};

init();
