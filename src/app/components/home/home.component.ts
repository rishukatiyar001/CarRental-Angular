import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from "../about/about.component";
import { DealsComponent } from "../deals/deals.component";
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, DealsComponent, DealsComponent ,WhyChooseUsComponent, SubscribeComponent, TestimonialsComponent, FooterComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
