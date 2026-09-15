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
    const nextMonth = new Date(
      this.displayedMonth.getFullYear(),
      this.displayedMonth.getMonth() + 1,
      1,
    );
    this.onMonthSelected(nextMonth);
  }

  get calendarCells(): (Date | null)[] {
    const lastDayOfTheMonth = new Date(
      this.displayedMonth.getFullYear(),
      this.displayedMonth.getMonth() + 1,
      0,
    ).getDate();
    const cells: (Date | null)[] = [];
    const firstDayOfWeek =
      (new Date(
        this.displayedMonth.getFullYear(),
        this.displayedMonth.getMonth(),
        1,
      ).getDay() +
        6) %
      7; //in ce zi pica 1 a lunii; conventie 0=duminca, 1=luni, etc..

    for (let i = 0; i < firstDayOfWeek; i++) {
      cells.push(null);
    }

    for (let day = 1; day <= lastDayOfTheMonth; day++) {
      cells.push(
        new Date(
          this.displayedMonth.getFullYear(),
          this.displayedMonth.getMonth(),
          day,
        ),
      );
    }

    return cells;
  }
}
