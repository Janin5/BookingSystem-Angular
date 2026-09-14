import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procedure } from '../models/procedure';
import { API_CONFIG } from '../config/api.config';
import { ApiPaths } from '../enums/api-paths';
import { ProcedureFilter } from '../filters/procedure-filter';
@Injectable({
  providedIn: 'root',
})
export class ProcedureService {
  constructor(private http: HttpClient) {}
  url = API_CONFIG.baseUrl + ApiPaths.Procedure;

  getProcedures(filter?: ProcedureFilter): Observable<Procedure[]> {
    let params = new HttpParams();
    if (filter?.salonId) {
      params = params.set('salonId', filter.salonId);
    }
    return this.http.get<Procedure[]>(this.url, { params });
  }
}
