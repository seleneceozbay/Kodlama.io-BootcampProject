import { IDeleteBlacklistRequestModel } from './../../models/request/blacklist/delete-blacklist-request';
import { IGetAllBlacklistResponseModel } from './../../models/response/blacklist/getAllBlacklist-response';
import { IGetBlacklistResponseModel } from './../../models/response/blacklist/getBlacklist-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateBlackListRequestModel } from 'src/app/models/request/blacklist/create-blacklist-request';
import { IUpdateBlackListRequestModel } from 'src/app/models/request/blacklist/update-blacklist-request';

@Injectable({
  providedIn: 'root',
})
export class BlacklistService {
  apiUrl = 'http://localhost:3000/blacklist';
  constructor(private httpClient: HttpClient) {}

  addBlacklist(blacklist: ICreateBlackListRequestModel) {
    return this.httpClient.post(this.apiUrl, blacklist);
  }
  getBlacklist(id: number): Observable<IGetBlacklistResponseModel> {
    return this.httpClient.get<IGetBlacklistResponseModel>(
      this.apiUrl + '/' + id
    );
  }
  getAllBlacklist(): Observable<IGetAllBlacklistResponseModel[]> {
    return this.httpClient.get<IGetAllBlacklistResponseModel[]>(this.apiUrl);
  }
  updateBlacklist(id: number, blacklist: IUpdateBlackListRequestModel) {
    return this.httpClient.put(this.apiUrl + '/' + id, blacklist);
  }

  removeApplicant(id: number) {
    return this.httpClient.delete<IDeleteBlacklistRequestModel>(
      this.apiUrl + '/' + id
    );
  }

  

 
}
