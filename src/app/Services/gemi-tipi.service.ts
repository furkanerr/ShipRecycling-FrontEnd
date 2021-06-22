import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GemiTipleri } from '../models/gemiTipleri';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class GemiTipiService {

  apiUrl = 'https://localhost:44335/api/';

  constructor(private httpClient: HttpClient) { }

  

  add(gemiTipi:GemiTipleri):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"gemitipleri/add",gemiTipi )
  }
}
