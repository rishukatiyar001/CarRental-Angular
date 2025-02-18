import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  cars = [
    { name: "Toyota Corolla", image: "assets/deals-1.png", rating: 4, reviews: 150, people: 4, transmission: "Manual", mileage: 18, fuel: "Petrol", price: 190 },
    { name: "Honda Amaze", image: "assets/deals-13.png", rating: 4, reviews: 200, people: 4, transmission: "Manual", mileage: 18, fuel: "Diesel", price: 100 },
    { name: "Honda City", image: "assets/deals-15.png", rating: 4, reviews: 300, people: 4, transmission: "Manual", mileage: 18, fuel: "Diesel", price: 150 }
  ];

}
