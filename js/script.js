const Confettiful = function (div) {
    const confettiDiv = document.createElement('div');
    confettiDiv.classList.add('confetti-container');
    confettiDiv.id = "confettiDiv"
    div.style.position = 'relative';
    div.appendChild(confettiDiv);
  
    this.confettiInterval = setInterval(() => {
      const confettiElement = document.createElement('div');
      confettiElement.classList.add('confetti', 'confetti--animation-' + ['slow', 'medium', 'fast'][Math.floor(Math.random() * 3)]);
      confettiElement.style.left = Math.floor(Math.random() * confettiDiv.offsetWidth) + 'px';
      confettiElement.style.width = Math.floor(Math.random() * 3) + 7 + 'px';
      confettiElement.style.height = confettiElement.style.width;
      confettiElement.style.backgroundColor = ['#fce18a', '#ff726d', '#b48def', '#f4306d'][Math.floor(Math.random() * 4)];
      confettiElement.removeTimeout = setTimeout(() => confettiElement.parentNode.removeChild(confettiElement), 3000);
      confettiDiv.appendChild(confettiElement);
    }, 25);
};
  
function party() {
    window.confettiful = new Confettiful(document.querySelector('.js-container'));
}
