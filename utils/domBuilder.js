const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id= "joke-setup"></div>
  <div id="joke-punchline"></div>
  <div id="joke-btn"></div>
  <div id="punchline-btn"></div>
  <div id="reset-btn"></div>`;
};

export default domBuilder;
