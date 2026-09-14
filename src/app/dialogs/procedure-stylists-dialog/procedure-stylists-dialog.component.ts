import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Procedure } from '../../models/procedure';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Stylist } from '../../models/stylist';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingComponent } from '../../components/booking/booking.component';

@Component({
  selector: 'app-procedure-stylists-dialog',
  imports: [MatDialogModule, MatIconModule, CommonModule],
  templateUrl: './procedure-stylists-dialog.component.html',
  styleUrl: './procedure-stylists-dialog.component.css',
})
export class ProcedureStylistsDialogComponent {
  procedure: Procedure;
  stylists: Stylist[] = [];

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ProcedureStylistsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { procedure: Procedure },
  ) {
    this.procedure = data.procedure;
    this.stylists = data.procedure.stylists ?? [];
  }

  openDialog(selectedStylist: Stylist) {
    this.dialogRef.close();
    this.dialog.open(BookingComponent, {
      data: { procedureId: this.procedure.id, stylistId: selectedStylist.id },
    });
  }
}
