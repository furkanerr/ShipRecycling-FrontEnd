import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KazanDoldurmaOperasyonlari } from '../models/kazanDoldurmaOperasyonlari';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class KazanDoldurmaService {

  apiUrl = 'https://localhost:44335/api/';

  constructor(private httpClient: HttpClient) { }

  

  add(kazanDoldurmaOperasyonlari:KazanDoldurmaOperasyonlari):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"kazandoldurmaoperasyonlari/add",kazanDoldurmaOperasyonlari)
  }
}
