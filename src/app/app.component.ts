import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CustomerService } from './services/customer.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'booking-frontend';
  constructor(
    public auth: AuthService,
    private customerService: CustomerService,
  ) {}

  ngOnInit() {
    this.authentication();
  }

  authentication() {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.customerService.provisionCustomer().subscribe();
      }
    });
  }

  login() {
    this.auth.loginWithRedirect({});
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
