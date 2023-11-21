// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/promises';
import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Joke Generator</h1>
    <button class="btn btn-secondary" id="get-joke">Get A Joke!</button>
    <div id="joke-setup"></div>
    <div id="joke-punchline"></div>`;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#get-joke')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  document.querySelector('#get-joke').addEventListener('click', () => {
    getJoke().then((data) => {
      renderToDom('#joke-setup', data.setup);
      renderToDom('#joke-punchline', data.delivery);
    });
  });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
