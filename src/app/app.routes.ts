import { Routes } from '@angular/router';
import { SalonListComponent } from './components/salon-list/salon-list.component';
import { SalonDetailsComponent } from './components/salon-details/salon-details.component';
import { ProcedureListComponent } from './components/procedure-list/procedure-list.component';
import { StylistDashboardComponent } from './components/stylist-dashboard/stylist-dashboard.component';

export const routes: Routes = [
  {
    path: 'saloane',
    component: SalonListComponent,
  },

  {
    path: 'salon/:id',
    component: SalonDetailsComponent,
  },

  {
    path: 'stylist-dashboard/:id',
    component: StylistDashboardComponent,
  },
];
