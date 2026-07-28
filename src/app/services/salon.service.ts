import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalonDetails, SalonListItem } from '../models/salon';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { ApiPaths } from '../enums/api-paths';

@Injectable({
  providedIn: 'root',
})
export class SalonService {
  private baseUrl = API_CONFIG.baseUrl + ApiPaths.Salon;

  constructor(private http: HttpClient) {}

  getSalons(): Observable<SalonListItem[]> {
    return this.http.get<SalonListItem[]>(`${this.baseUrl}/SalonsList`);
  }

  getSalonById(id: string): Observable<SalonDetails> {
    return this.http.get<SalonDetails>(`${this.baseUrl}/${id}`);
  }
}
