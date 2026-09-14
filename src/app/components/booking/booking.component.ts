import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { StylistService } from '../../services/stylist.service';
import { Slot } from '../../models/slot';
import { BehaviorSubject, switchMap } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-booking',
  imports: [
    MatIcon,
    CommonModule,
    MatIconButton,
    MatDialogClose,
    MatDialogModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {
  slots: Slot[] = [];
  selectedSlot: Slot | null = null;
  displayedMonth: Date = new Date();
  availableDates: string[] = [];
  weekDays: string[] = ['l', 'ma', 'mi', 'j', 'v', 's', 'd'];

  private monthChange = new BehaviorSubject<Date>(new Date());

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { procedureId: string; stylistId: string },
    private dialogRef: MatDialogRef<BookingComponent>,
    private stylistService: StylistService,
  ) {}

  ngOnInit(): void {
    this.loadAvailability();
  }

  loadAvailability(): void {
    this.monthChange
      .pipe(
        switchMap((month) =>
          this.stylistService.getAvailability(
            this.data.stylistId,
            this.data.procedureId,
            month.getMonth() + 1,
            month.getFullYear(),
          ),
        ),
      )
      .subscribe((dates) => (this.availableDates = dates));
  }

  onMonthSelected(month: Date): void {
    this.displayedMonth = month;
    this.monthChange.next(month);
  }

  nextMonth(): void {
    this.onMonthSelected(this.displayedMonth);
  }
}
