import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meslekler } from '../models/meslekler';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class MesleklerService {


  apiUrl = 'https://localhost:44335/api/';
  
  constructor(private httpClient: HttpClient) { }

  add(meslek:Meslekler):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"meslek/add",meslek)
  }




}
