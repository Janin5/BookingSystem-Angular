import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { ApiPaths } from '../enums/api-paths';
import { Observable } from 'rxjs';
import { Stylist } from '../models/stylist';

@Injectable({
  providedIn: 'root',
})
export class StylistService {
  constructor(private http: HttpClient) {}

  url = API_CONFIG.baseUrl + ApiPaths.Stylist;

  getStylistsbySalon(salonId: string): Observable<Stylist[]> {
    return this.http.get<Stylist[]>(`${this.url}/BySalon/${salonId}`);
  }
}
