import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { List } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://ncddpdb.dswd.gov.ph/api/ceac/lib_region';
  constructor(private _http: HttpClient) { }
  getData() {
    return this._http.get<List[]>(this.apiUrl);

  }
}
