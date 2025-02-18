import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false; // Track menu state

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks && !menuBtn.contains(event.target as Node) && !navLinks.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }
  }

}
