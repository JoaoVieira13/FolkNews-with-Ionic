import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }
  getNoticia(id: any) {
    return this.http.get('https://www.publico.pt/api/content/news/' + id);
  }
}
