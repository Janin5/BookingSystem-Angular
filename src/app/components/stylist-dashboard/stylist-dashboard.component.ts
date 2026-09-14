import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Appointment } from '../../models/appointment';
import { Stylist } from '../../models/stylist';
import { StylistService } from '../../services/stylist.service';
import { Status } from '../../models/appointment';
@Component({
  selector: 'app-stylist-dashboard',
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './stylist-dashboard.component.html',
  styleUrl: './stylist-dashboard.component.css',
})
export class StylistDashboardComponent implements OnInit {
  appointments: Appointment[] = [];
  stylist: Stylist | null = null;
  status = Status;

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private stylistService: StylistService,
  ) {}

  ngOnInit(): void {
    const stylistId = this.route.snapshot.paramMap.get('id');
    if (stylistId) {
      this.stylistService
        .getStylistbyId(stylistId)
        .subscribe((val) => (this.stylist = val));

      this.appointmentService
        .getAppointments({ stylistId: stylistId })
        .subscribe((val) => (this.appointments = val));
    }
  }

  changeStatus(appId: string, newStatus: Status) {
    this.appointmentService.changeStatus(appId, newStatus).subscribe({
      next: () => {
        const stylistId = this.route.snapshot.paramMap.get('id');
        if (stylistId) {
          this.appointmentService
            .getAppointments({ stylistId: stylistId })
            .subscribe((val) => (this.appointments = val));
        }
      },
      error: (err) => {
        console.error('Lista de programari nu a fost actualizata', err);
      },
    });
  }
}
