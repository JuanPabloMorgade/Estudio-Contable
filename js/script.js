const counterElements = document.getElementsByClassName('counter');

const animateCounter = (counterElement, targetNumber) => {
  const animationDuration = 15500; // Duración de la animación en milisegundos
  const framesPerSecond = 30; // Cuántos frames por segundo utilizar para la animación
  
  const increment = targetNumber / (animationDuration / (1000 / framesPerSecond));
  let currentValue = 0;
  
  const updateCounter = () => {
    currentValue += increment;
    
    if (currentValue >= targetNumber) {
      currentValue = targetNumber;
    } else {
      requestAnimationFrame(updateCounter);
    }
    
    counterElement.textContent = Math.floor(currentValue);
  };
  
  updateCounter();
};

for (let i = 0; i < counterElements.length; i++) {
  const counterElement = counterElements[i];
  const targetNumber = parseInt(counterElement.dataset.target);
  
  animateCounter(counterElement, targetNumber);
}


