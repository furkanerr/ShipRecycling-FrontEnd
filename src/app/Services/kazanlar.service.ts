import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kazanlar } from '../models/kazanlar';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class KazanlarService {

  apiUrl = 'https://localhost:44335/api/';
  constructor(private httpClient:HttpClient) { }


  
  add(kazan:Kazanlar):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"kazan/add",kazan)
  }


}
