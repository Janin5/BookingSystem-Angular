import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment, Status } from '../models/appointment';
import { API_CONFIG } from '../config/api.config';
import { ApiPaths } from '../enums/api-paths';
import { AppointmentFilter } from '../filters/appointment-filter';
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  url = API_CONFIG.baseUrl + ApiPaths.Appointment;
  constructor(private http: HttpClient) {}

  getAppointments(filter?: AppointmentFilter): Observable<Appointment[]> {
    let params = new HttpParams();
    if (filter?.stylistId) {
      params = params.set('stylistId', filter.stylistId);
    }

    return this.http.get<Appointment[]>(this.url, { params });
  }

  changeStatus(appId: string, newStatus: Status): Observable<void> {
    return this.http.patch<void>(
      `${this.url}/ChangeStatus/${appId}`,
      newStatus,
    );
  }
}
