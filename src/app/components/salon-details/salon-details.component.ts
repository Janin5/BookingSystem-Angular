import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SalonService } from '../../services/salon.service';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Procedure } from '../../models/procedure';
import { SalonDetails } from '../../models/salon';
import { ProcedureListComponent } from '../procedure-list/procedure-list.component';

@Component({
  selector: 'app-salon-details',
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterLink,
    ProcedureListComponent,
  ],
  templateUrl: './salon-details.component.html',
  styleUrl: './salon-details.component.css',
})
export class SalonDetailsComponent implements OnInit {
  salon: SalonDetails | null = null;
  procedure: Procedure[] = [];

  constructor(
    private route: ActivatedRoute,
    private salonService: SalonService,
  ) {}

  ngOnInit(): void {
    const salonId = this.route.snapshot.paramMap.get('id');

    if (salonId) {
      this.salonService.getSalonById(salonId).subscribe({
        next: (data) => {
          this.salon = data;
        },
        error: (err) => {
          console.error('Eroare la incarcarea salonului', err);
        },
      });
    }
  }
}
