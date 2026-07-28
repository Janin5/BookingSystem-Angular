import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-oftgru1iweg2utru.us.auth0.com',
      clientId: 'AyDcUt3WGrFzqHwoJe77sus8oiQ4FERO',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://bookingsystem-api',
      },
    }),
    //provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(),
  ],
};
