import { Component, Input, OnInit } from '@angular/core';
import { StylistService } from '../../services/stylist.service';
import { Stylist } from '../../models/stylist';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-stylist-list',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './stylist-list.component.html',
  styleUrl: './stylist-list.component.css',
})
export class StylistListComponent implements OnInit {
  @Input() salonId!: string;
  stylists: Stylist[] = [];

  constructor(private stylistService: StylistService) {}

  ngOnInit() {
    this.stylistService.getStylists({ salonId: this.salonId }).subscribe({
      next: (data) => {
        this.stylists = data;
      },
      error: (err) => {
        console.error('Eroare la preluarea stilistilor', err);
      },
    });
  }
}
