const menu = document.querySelector('.menu-bars');
const mobileNav = document.querySelector('.mobile-nav');
const cross = document.querySelector('.cross');

if (menu) {
  menu.addEventListener('click', () => {
    mobileNav.classList.toggle('hide');
    cross.classList.toggle('hide');
  });
} else {
  console.log('Something went wrong');
}
