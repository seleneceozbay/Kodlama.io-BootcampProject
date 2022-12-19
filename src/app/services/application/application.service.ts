import { ICreateApplicationRequestModel } from './../../models/request/application/create-application-request';
import { Observable } from 'rxjs';
import { IGetApplicationResponseModel } from './../../models/response/application/getApplication-response';
import { IGetAllApplicationResponseModel } from './../../models/response/application/getAllApplication-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  apiurl: string = 'http://localhost:3000/application';

  constructor(private httpClient:HttpClient) { }
  addApplication(application){
    return this.httpClient.post(this.apiurl,application)
  }

  getAllApplication():Observable<IGetAllApplicationResponseModel[]>{
    return this.httpClient.get<IGetAllApplicationResponseModel[]>(this.apiurl)
  }

  getApplicationById(id):Observable<IGetApplicationResponseModel>{
    return this.httpClient.get<IGetApplicationResponseModel>(this.apiurl + '/' +id);
  }

  updateApplication(id,application){
    return this.httpClient.put(this.apiurl +'/' +id,application);
  }

  applicationDelete(data):Observable<IGetApplicationResponseModel>{
    return this.httpClient.delete<IGetAllApplicationResponseModel>(this.apiurl+'/' + data.id)
  }


  add(value) {
    return this.httpClient.post(this.apiurl, value);
  }

  getUserId(id:string):Observable<ICreateApplicationRequestModel[]>{
    return this.httpClient.get<ICreateApplicationRequestModel[]>(this.apiurl + '?applicantId=' + id);

  }


}


