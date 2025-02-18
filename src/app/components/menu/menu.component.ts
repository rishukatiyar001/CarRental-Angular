// import { Component, OnInit } from '@angular/core';
// import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
// import Swiper from 'swiper'; // Import Swiper
// import 'swiper/css'; // Import Swiper CSS



// @Component({
//   selector: 'app-menu',
//   standalone: true,
//   imports: [],
//   templateUrl: './menu.component.html',
//   styleUrl: './menu.component.css'
// })
// export class MenuComponent implements OnInit {
//   isMenuOpen = false;

//   ngOnInit(): void {
//     this.setupScrollReveal();
//     this.setupSwiper();
//   }

//   // ScrollReveal setup
//   setupScrollReveal(): void {
//     const scrollRevealOption = {
//       distance: '50px',
//       origin: 'bottom',
//       duration: 1000,
//     };

//     ScrollReveal().reveal('.header__image img', { ...scrollRevealOption, origin: 'right' });
//     ScrollReveal().reveal('.header__content h2', { ...scrollRevealOption, delay: 500 });
//     ScrollReveal().reveal('.header__content h1', { ...scrollRevealOption, delay: 1000 });
//     ScrollReveal().reveal('.header__content .section__description', { ...scrollRevealOption, delay: 1500 });
//     ScrollReveal().reveal('.header__form form', { ...scrollRevealOption, delay: 2000 });
//   }

//   // Swiper setup
//   setupSwiper(): void {
//     new Swiper('.swiper', {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       loop: true,
//     });
//   }

//   // Toggle Menu
//   toggleMenu(): void {
//     this.isMenuOpen = !this.isMenuOpen;
//   }
// }
