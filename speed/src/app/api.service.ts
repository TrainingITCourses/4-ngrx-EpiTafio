import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = environment.apiUrl + 'pub/items';
  constructor(private http: HttpClient) { }

  postLanzamiento$ = lanzamiento => this.http.post(this.url, lanzamiento);
  getLanzamiento$ = lanzamientoId => this.http.get(this.url + '/' + lanzamientoId);
}
