import { Component, Input, OnInit } from '@angular/core';
import { StylistService } from '../../services/stylist.service';
import { Stylist } from '../../models/stylist';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { DialogStylistComponent } from '../../dialog-stylist/dialog-stylist.component';

@Component({
  selector: 'app-stylist-list',
  imports: [CommonModule, MatDialogModule, MatButton],
  templateUrl: './stylist-list.component.html',
  styleUrl: './stylist-list.component.css',
})
export class StylistListComponent implements OnInit {
  @Input() salonId!: string;
  stylists: Stylist[] = [];

  constructor(
    private stylistService: StylistService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.stylistService.getStylistsbySalon(this.salonId).subscribe({
      next: (data) => {
        this.stylists = data;
      },
      error: (err) => {
        console.error('Eroare la preluarea stilistilor', err);
      },
    });
  }

  openDialog(selectedStylist: Stylist) {
    this.dialog.open(DialogStylistComponent, {
      data: { stylist: selectedStylist },
    });
  }
}
