const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.menu');
const headerMenuItems = document.querySelectorAll('.header .menu .items');

burger.addEventListener('click', () => {
  headerMenu.classList.toggle('open');
  burger.classList.toggle('open');

  headerMenuItems.forEach((item, index) => {
    if (item.style.animationDelay) {
      return (item.style.animationDelay = '');
    }
    const maxDelay = 0.8;
    const delay = index / 12;
    const animationDelay = delay >= maxDelay ? maxDelay : delay;
    return (item.style.animationDelay = `${animationDelay}s`);
  });
  headerMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      headerMenu.classList.remove('open');
      burger.classList.remove('open');
    });
  });
});
