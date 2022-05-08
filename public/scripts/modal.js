/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
(() => {
  const modal = {
    initialize() {
      this.cacheElements();
    },

    cacheElements() {
      const openEls = document.querySelectorAll('[data-open]');
      const isVisible = 'is-visible';
      const closeEls = document.querySelectorAll('[data-close]');

      for (const el of openEls) {
        el.addEventListener('click', function () {
          const modalId = this.dataset.open;
          document.getElementById(modalId).classList.add(isVisible);
        });
      }

      for (const el of closeEls) {
        el.addEventListener('click', function () {
          this.parentElement.parentElement.parentElement.classList.remove(
            isVisible
          );
        });
      }

      document.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal.is-visible')) {
          document
            .querySelector('.modal.is-visible')
            .classList.remove(isVisible);
        }
      });

      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
          document
            .querySelector('.modal.is-visible')
            .classList.remove(isVisible);
        }
      });
    },
  };
  modal.initialize();
})();
