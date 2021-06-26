import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Gemiler } from '../models/gemiler';
import { ResponseModel } from '../models/responseModel';
import { GemilerDto } from '../models/DTOs/gemilerDto';

@Injectable({
  providedIn: 'root'
})
export class GemiService {


 apiUrl = 'https://localhost:44335/api/';

  constructor(private httpClient: HttpClient) { }

  

  add(gemi:Gemiler):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"gemi/add",gemi)
  }

  update(gemi:Gemiler):Observable<ResponseModel>{
    let id =gemi.id
    
    return this.httpClient.put<ResponseModel>(this.apiUrl+"gemi/update",gemi)
  }
  


  getGemi():Observable<ListResponseModel<Gemiler>> {
    let newPath = this.apiUrl + "gemi/getall"
    return this.httpClient.get<ListResponseModel<Gemiler>>(newPath);
  }
  getGemiDetailsById(gemiId:number):Observable<ListResponseModel<Gemiler>> {
    let newPath = this.apiUrl + "gemi/getbyid?gemiId="+gemiId
    return this.httpClient.get<ListResponseModel<Gemiler>>(newPath);
  }

  getGemiDetails():Observable<ListResponseModel<GemilerDto>> {
    let newPath = this.apiUrl + "gemi/getalldetailsofgemi"
    return this.httpClient.get<ListResponseModel<GemilerDto>>(newPath);
  }
}
