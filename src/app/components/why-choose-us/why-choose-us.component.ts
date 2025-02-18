import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  reasons = [
    { title: "Customer Support", description: "24/7 assistance available", icon: "ri-customer-service-line" },
    { title: "Many Locations", description: "Convenient pick-up and drop-off", icon: "ri-map-pin-line" },
    { title: "Best Price", description: "Affordable and transparent pricing", icon: "ri-wallet-line" }
  ];
}
