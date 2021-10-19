window.onload = () => {
// dom variables for header
  const bodyCls = document.getElementById('js-body').classList;
  const overlay = document.getElementById('js-overlay');
  const cartBtn = document.getElementById('js-cart');
  const cartBox = document.getElementById('js-cart-detail');
  const close = document.getElementById('js-close');
  const sideBar = document.getElementById('js-nav-side');
  const menuBtn = document.getElementById('js-menu-bar');

  // re usable functions for overlay
  function bgOn() {
    overlay.hidden = false;
    bodyCls.add('no-scroll');
  }

  function bgOff() {
    overlay.hidden = true;
    bodyCls.remove('no-scroll');
  }

  // button event for cart-list
  cartBtn.addEventListener('click', () => {
    if (overlay.hidden && cartBox) {
      bgOn();
      cartBox.hidden = false;
    } else {
      bgOff();
      cartBox.hidden = true;
    }
  });

  menuBtn.addEventListener('click', () => {
    sideBar.classList.replace('side-out', 'side-in');
    overlay.style.zIndex = 5;
    bgOn();
  });

  close.addEventListener('click', () => {
    sideBar.classList.replace('side-in', 'side-out');
    overlay.style.zIndex = 1;
    bgOff();
  });
};
