import { IUpdateBootcampRequestModel } from './../../models/request/bootcamp/update-bootcamp-request';
import { IGetBootcampResponseModel } from './../../models/response/bootcamp/getBootcamp-response';
import { IGetAllBootcampResponseModel } from './../../models/response/bootcamp/getAllBootcamp-response';
import { Observable } from 'rxjs';
import { ICreateBootcampRequestModel } from './../../models/request/bootcamp/create-bootcamp-request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  apiUrl = 'http://localhost:3000/bootcamp';

  constructor(private httpClient: HttpClient) {}

  addBootcamp(bootcamp: ICreateBootcampRequestModel) {
    return this.httpClient.post(this.apiUrl, bootcamp);
  }

  getBootcamp(id: number): Observable<IGetBootcampResponseModel> {
    return this.httpClient.get<IGetBootcampResponseModel>(
      this.apiUrl + '/' + id
    );
  }

  getAllBootcamp(): Observable<IGetAllBootcampResponseModel[]> {
    return this.httpClient.get<IGetAllBootcampResponseModel[]>(this.apiUrl);
  }

  updateBootcamp(id: number, bootcamp: IUpdateBootcampRequestModel) {
    return this.httpClient.put(this.apiUrl + '/' + id, bootcamp);
  }
  bootcampDelete(data): Observable<IGetAllBootcampResponseModel> {
    return this.httpClient.delete<IGetAllBootcampResponseModel>(
      this.apiUrl + '/' + data.id
    );
  }
}
