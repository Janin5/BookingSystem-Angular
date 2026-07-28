import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiPaths } from '../enums/api-paths';
import { API_CONFIG } from '../config/api.config';
import { appConfig } from '../app.config';
import { Inject } from '@angular/core';
import { Procedure } from '../models/procedure';
import { Stylist } from '../models/stylist';

@Component({
  selector: 'app-dialog-procedure',
  imports: [],
  templateUrl: './dialog-procedure.component.html',
  styleUrl: './dialog-procedure.component.css',
})
export class DialogProcedureComponent {
  url = API_CONFIG.baseUrl + ApiPaths.Procedure;
  procedure: Procedure;
  stylists: Stylist[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: { procedure: Procedure },
    private http: HttpClient,
  ) {
    this.procedure = data.procedure;
  }

  ngOnInit(): void {
    this.http
      .get<any>(`${this.url}/${this.procedure.id}/with-stylists`)
      .subscribe({
        next: (response) => {
          this.procedure = response.procedures;
          this.stylists = response.stylists;

          console.log('Stilisti primiti:', this.stylists);
          console.log('Este stylists un array?', Array.isArray(this.stylists));
        },
      });
  }
}
