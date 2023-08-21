const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="container">
    <img src="https://i.pinimg.com/originals/89/3f/f7/893ff70cb2d6f15710321ea492bcbc41.png">
    <div id= "joke-setup"></div>
    <div id="joke-punchline"></div>
    <div id="joke-btn"></div>
    <div id="punchline-btn"></div>
    <div id="reset-btn"></div>
  </div>`;
};

export default domBuilder;
