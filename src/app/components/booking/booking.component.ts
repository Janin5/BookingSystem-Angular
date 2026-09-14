import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { StylistService } from '../../services/stylist.service';
import { Slot } from '../../models/slot';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {
  slots: Slot[] = [];
  selectedSlot: Slot | null = null;
  displayedMonth: Date = new Date();
  availableDates: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { procedureId: string; stylistId: string },
    private dialogRef: MatDialogRef<BookingComponent>,
    private stylistService: StylistService,
  ) {}

  ngOnInit(): void {
    this.loadAvailability();
  }

  loadAvailability() {
    this.stylistService
      .getAvailability(
        this.data.stylistId,
        this.data.procedureId,
        this.displayedMonth.getMonth() + 1,
        this.displayedMonth.getFullYear(),
      )
      .subscribe((dates) => (this.availableDates = dates));
  }
}
