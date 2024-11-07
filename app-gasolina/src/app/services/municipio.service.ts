import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CodeList } from '../models/codigoPostal.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService{

  constructor(private http: HttpClient) { }

  getPostalCodeList(): Observable<CodeList[]> {
    return this.http.get<CodeList[]>('http://localhost:3000/code-list/?limit=50');
  }
}
