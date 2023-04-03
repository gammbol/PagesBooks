let isOpened = false;
const mobileMenuBtn = document.querySelector('.navbar__open');
const mobileMenu = document.querySelector('.header__mobile-menu');
const menuCartWrapper = document.querySelector('.mobile-menu__item:nth-of-type(6)');
const menuCart = document.querySelector('.menu__cart');

mobileMenuBtn.addEventListener('click', (e) => {
	e.preventDefault();
	isOpened = !isOpened
	mobileMenu.style.top = isOpened ? '70px' : '-1000px';
	document.body.style.overflow = isOpened ? 'hidden' : 'auto';
});

menuCartWrapper.addEventListener('mouseover', () => {
	menuCart.src = "images/carts/cart-primary.svg";
});

menuCartWrapper.addEventListener('mouseout', () => {
	menuCart.src = "images/carts/cart-white.svg";
});