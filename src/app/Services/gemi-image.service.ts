import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { Resimler } from '../models/resimler';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class GemiImageService {

  constructor(private httpClient: HttpClient,) { }
  apiUrl = 'https://localhost:44335/api/';
  gemiImageAdd(gemiImage:Resimler,file:any):Observable<ResponseModel>{
    
    const uploadData = new FormData();
    uploadData.append('Image',file,file.name)
    uploadData.append('GemiId',JSON.stringify(gemiImage.GemiId)) 
    let newPath =  this.apiUrl+"carimages/add"; 
    return this.httpClient.post<ResponseModel>( this.apiUrl+"resim/add",uploadData)
  }

  getGemiImageByGemiId(gemiId:number):Observable<ListResponseModel<Resimler>>{
    let newPath = this.apiUrl + "resim/getbyid?gemiId="+gemiId
    return this.httpClient.get<ListResponseModel<Resimler>>(newPath);
  }
}
