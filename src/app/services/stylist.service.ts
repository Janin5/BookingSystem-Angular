import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { ApiPaths } from '../enums/api-paths';
import { Observable } from 'rxjs';
import { Stylist } from '../models/stylist';
import { StylistFilter } from '../filters/stylist-filter';
import { Slot } from '../models/slot';

@Injectable({
  providedIn: 'root',
})
export class StylistService {
  constructor(private http: HttpClient) {}

  url = API_CONFIG.baseUrl + ApiPaths.Stylist;

  getStylistbyId(stylistId: string): Observable<Stylist> {
    return this.http.get<Stylist>(`${this.url}/${stylistId}`);
  }

  getStylists(filter?: StylistFilter): Observable<Stylist[]> {
    let params = new HttpParams();
    if (filter?.salonId) {
      params = params.set('salonId', filter.salonId);
    }
    return this.http.get<Stylist[]>(this.url, { params });
  }

  getAvailability(
    stylistId: string,
    procedureId: string,
    month: number,
    year: number,
  ): Observable<string[]> {
    const params = new HttpParams()
      .set('procedureId', procedureId)
      .set('month', month)
      .set('year', year);

    return this.http.get<string[]>(`${this.url}/${stylistId}/availability`, {
      params,
    });
  }

  getFreeSlots(
    stylistId: string,
    date: string,
    procedureId: string,
  ): Observable<Slot[]> {
    const params = new HttpParams()
      .set('date', date)
      .set('procedureId', procedureId);

    return this.http.get<Slot[]>(`${this.url}/${stylistId}/free-slots`, {
      params,
    });
  }
}
