import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bayrak } from '../models/bayrak';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BayrakService {
  apiUrl = 'https://localhost:44335/api/';
  constructor(private httpClient: HttpClient) { }


  getBayrak():Observable<ListResponseModel<Bayrak>> {
    let newPath = this.apiUrl + "bayrak/getall"
    return this.httpClient.get<ListResponseModel<Bayrak>>(newPath);
  }

  add(bayrak:Bayrak):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"bayrak/add",bayrak)
  }

}
