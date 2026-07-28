import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procedure } from '../models/procedure';
import { API_CONFIG } from '../config/api.config';
import { ApiPaths } from '../enums/api-paths';
@Injectable({
  providedIn: 'root',
})
export class ProcedureService {
  constructor(private http: HttpClient) {}
  url = API_CONFIG.baseUrl + ApiPaths.Procedure;

  getProcedures(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(`${this.url}`);
  }

  getProceduresBySalon(salonId: string): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(`${this.url}/BySalon/${salonId}`);
  }
}
