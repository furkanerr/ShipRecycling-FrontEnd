import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Gemiler } from '../models/gemiler';
import { ResponseModel } from '../models/responseModel';
import { GemilerDto } from '../models/DTOs/gemilerDto';
import { Resimler } from '../models/resimler';
import { SingleResponseModel } from '../models/singleResponseModel';

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
   
    
    return this.httpClient.put<ResponseModel>(this.apiUrl+"gemi/update",gemi)
  }
  
  delete(id:number){
    return this.httpClient.delete(this.apiUrl+"gemi/delete?id="+id)

  }
  


  getGemi():Observable<ListResponseModel<Gemiler>> {
    let newPath = this.apiUrl + "gemi/getall"
    return this.httpClient.get<ListResponseModel<Gemiler>>(newPath);
  }
  getGemiDetailsById(gemiId:number):Observable<ListResponseModel<GemilerDto>> {
    let newPath = this.apiUrl + "gemi/getdetailsofgemibyid?Id="+gemiId
    return this.httpClient.get<ListResponseModel<GemilerDto>>(newPath);
  }

  getGemiDetails():Observable<ListResponseModel<GemilerDto>> {
    let newPath = this.apiUrl + "gemi/getalldetailsofgemi"
    return this.httpClient.get<ListResponseModel<GemilerDto>>(newPath);
  }

 

}
