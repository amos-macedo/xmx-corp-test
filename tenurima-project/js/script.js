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
    const originals = Array.from(track.children);
    const slides = originals.length;
    if (!slides) return;

    const cloneSet = () => originals.map((el) => {
      const clone = el.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('inert', '');
      return clone;
    });

    const frag = document.createDocumentFragment();
    cloneSet().forEach((el) => frag.appendChild(el));
    originals.forEach((el) => frag.appendChild(el));
    cloneSet().forEach((el) => frag.appendChild(el));
    track.appendChild(frag);

    let pos = slides;

    const step = () => {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return track.children[0].getBoundingClientRect().width + gap;
    };

    const moveTo = (p) => {
      track.style.transform = `translateX(-${p * step()}px)`;
    };

    const snapWithoutTransition = (p) => {
      track.style.transition = 'none';
      moveTo(p);
      // eslint-disable-next-line no-unused-expressions
      track.offsetHeight;
      track.style.transition = '';
    };

    track.addEventListener('transitionend', (e) => {
      if (e.target !== track || e.propertyName !== 'transform') return;
      if (pos >= slides * 2) {
        pos -= slides;
        snapWithoutTransition(pos);
      } else if (pos < slides) {
        pos += slides;
        snapWithoutTransition(pos);
      }
    });

    document.querySelector('.slider__btn--next').addEventListener('click', () => {
      pos += 1;
      moveTo(pos);
    });

    document.querySelector('.slider__btn--prev').addEventListener('click', () => {
      pos -= 1;
      moveTo(pos);
    });

    window.addEventListener('resize', () => snapWithoutTransition(pos));

    snapWithoutTransition(pos);
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
