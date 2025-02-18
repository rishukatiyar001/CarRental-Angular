import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { HomeComponent } from './components/home/home.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(
    [
      { path: '', component: HomeComponent }, // Remove redirectTo '/home'
      { path: '**', redirectTo: '' } // Redirect unknown paths to root
    ],
    withComponentInputBinding(),
    withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ),]
};
