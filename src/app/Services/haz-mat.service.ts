import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HazMat } from '../models/hazMat';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class HazMatService {
  apiUrl = 'https://localhost:44335/api/';
  constructor(private httpClient: HttpClient) {}

  add(hazMat: HazMat): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'hazmat/add',
      hazMat
    );
  }
}
