import { Component, OnInit } from '@angular/core';
import { SalonService } from '../../services/salon.service';
import { SalonListItem } from '../../models/salon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-salon-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './salon-list.component.html',
  styleUrl: './salon-list.component.css',
})
export class SalonListComponent implements OnInit {
  // salons: Salon[] = [];

  searchTerm = new FormControl('');
  allSalons: SalonListItem[] = [];
  filteredSalons: SalonListItem[] = []; //La început, lista filtrată e identică cu cea completă

  constructor(private salonService: SalonService) {}

  ngOnInit(): void {
    this.salonService.getSalons().subscribe({
      next: (data) => {
        this.allSalons = data;
        this.filteredSalons = data;
      },
    });

    this.searchTerm.valueChanges.subscribe({
      next: (query) => {
        this.filterSalons(query || '');
      },
    });
  }

  //logica de filtrare
  filterSalons(query: string) {
    const q = query.toLowerCase();
    if (!q) {
      {
        this.filteredSalons = [...this.allSalons];
        return;
      }
    }

    this.filteredSalons = this.allSalons.filter((salon) => {
      const nameMatch = salon.name.toLowerCase().includes(q);
      const procedureMatch = salon.procedures.some((procedure: string) =>
        procedure.toLowerCase().includes(q),
      );

      return nameMatch || procedureMatch;
    });
  }

  getProcedureNames(salon: SalonListItem): string {
    if (!salon.procedures || salon.procedures.length === 0)
      return 'Fără servicii';
    return salon.procedures.join(', ');
  }
}
