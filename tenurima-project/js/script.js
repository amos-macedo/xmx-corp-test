(() => {
  'use strict';

  function initAccordion() {
    const items = document.querySelectorAll('.accordion__item');
    items.forEach((item) => {
      const trigger = item.querySelector('.accordion__trigger');
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        items.forEach((other) => {
          other.classList.remove('is-open');
          other.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-slider__track');
    if (!track) return;
    const slides = track.children.length;
    let index = 0;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    document.querySelector('.slider__btn--next').addEventListener('click', () => {
      index = (index + 1) % slides;
      update();
    });

    document.querySelector('.slider__btn--prev').addEventListener('click', () => {
      index = (index - 1 + slides) % slides;
      update();
    });
  }

  function initBuyButtons() {
    document.querySelectorAll('.btn--buy').forEach((btn) => {
      btn.addEventListener('click', () => {
        const plan = btn.dataset.plan;
        console.log(`Plano selecionado: ${plan}`);
        window.location.href = '#price';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initTestimonialSlider();
    initBuyButtons();
  });
})();
