import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BannerComponent } from "./components/banner/banner.component";
import { DealsComponent } from "./components/deals/deals.component";
import { WhyChooseUsComponent } from "./components/why-choose-us/why-choose-us.component";
import { SubscribeComponent } from "./components/subscribe/subscribe.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BannerComponent, DealsComponent, WhyChooseUsComponent, SubscribeComponent, TestimonialsComponent, FooterComponent, AboutComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Car-Rental-Angular';
  isWhatsAppOpen = false;

  toggleWhatsApp() {
    this.isWhatsAppOpen = !this.isWhatsAppOpen;
  }
}
