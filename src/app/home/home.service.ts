import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getPopular(tipo) {
    return this.http.get('http://www.publico.pt/api/list/'+tipo);
  }
}
