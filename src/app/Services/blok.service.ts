import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bloklar } from '../models/bloklar';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BlokService {
  apiUrl = 'https://localhost:44335/api/';

  constructor(private httpClient: HttpClient) { }

  

  add(blok:Bloklar):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"bloklar/add",blok)
  }
}
