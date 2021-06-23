import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getNewsSearch(search){
    return this.http.get(`https://www.publico.pt/api/list/${search}`);
  }
}
