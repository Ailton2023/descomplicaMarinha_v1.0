function daysUntilTargetDate(targetDate) {
      const today = new Date(); // Pega a data atual do computador
      const target = new Date(targetDate);
      const timeDiff = target - today;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return daysDiff;
    }

    function updateCountdown() {
      // Altere a data desejada aqui no formato 'YYYY-MM-DD'
      // Exemplo: '2025-12-31' para 31 de Dezembro de 2025
      const targetDate = '2025-10-26';

      const daysLeft = daysUntilTargetDate(targetDate);
      const countdownElement = document.getElementById('countdown');

      if (daysLeft < 1) {
        countdownElement.textContent = 'PROVA';
      } else if (daysLeft === 1) {
        countdownElement.textContent = '1 dia';
      } else {
        countdownElement.textContent = `${daysLeft} dias`;
      }
    }

    // Atualiza imediatamente e a cada 24 horas
    updateCountdown();
    setInterval(updateCountdown, 1000 * 60 * 60 * 24);