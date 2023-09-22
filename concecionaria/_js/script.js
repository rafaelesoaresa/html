// Função para atualizar o relógio a cada segundo
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);
  
  // Chamada inicial para exibir o relógio imediatamente
  updateClock();
  const slide = document.querySelector('.carousel-slide');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = items.length - 1;
    } else if (index >= items.length) {
      currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slide.style.transform = `translateX(${offset}%)`;
  }

  setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
  }, 3000);