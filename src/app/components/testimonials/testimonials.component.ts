import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  reviews = [
    { name: "Sarah Johnson", image: "assets/client-1.jpg", comment: "Amazing service!" },
    { name: "Michael Adams", image: "assets/client-2.jpg", comment: "Customer support was excellent!" }
  ];

}
