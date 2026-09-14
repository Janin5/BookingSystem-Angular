import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Stylist } from '../models/stylist';
import { Procedure } from '../models/procedure';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { ApiPaths } from '../enums/api-paths';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-stylist',
  imports: [MatDialogModule, MatButton, CommonModule, MatIconModule],
  templateUrl: './dialog-stylist.component.html',
  styleUrl: './dialog-stylist.component.css',
})
export class DialogStylistComponent {
  url = API_CONFIG.baseUrl + ApiPaths.Stylist;
  stylist: Stylist;
  procedures: Procedure[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { stylist: Stylist },
    private http: HttpClient,
  ) {
    this.stylist = data.stylist;
  }

  bookProcedure(proc: Procedure) {}
}
