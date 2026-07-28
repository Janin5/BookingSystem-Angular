import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { ApiPaths } from '../enums/api-paths';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url = API_CONFIG.baseUrl + ApiPaths.Customer;
  constructor(private http: HttpClient) {}

  provisionCustomer() {
    return this.http.post(`${this.url}/ProvisionCustomer`, {});
  }
}
