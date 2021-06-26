import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GemiTipleri } from '../models/gemiTipleri';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class GemiTipiService {

  apiUrl = 'https://localhost:44335/api/';

  constructor(private httpClient: HttpClient) { }

  update(gemiTipi:GemiTipleri):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.apiUrl+"gemitipleri/update",gemiTipi)
  }
  getGemiDetailsById(gemiTipiId:number):Observable<ListResponseModel<GemiTipleri>> {
    let newPath = this.apiUrl + "gemitipleri/getbyid?gemiTipiId="+gemiTipiId
    return this.httpClient.get<ListResponseModel<GemiTipleri>>(newPath);
  }
  add(gemiTipi:GemiTipleri):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"gemitipleri/add",gemiTipi )
  }
}
