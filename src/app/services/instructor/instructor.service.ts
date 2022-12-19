import { IUpdateInstructorRequestModel } from './../../models/request/instructor/update-instructor-request';
import { IGetAllInstructorResponseModel } from './../../models/response/instructor/getAllInstructor-response';
import { IGetInstructorResponseModel } from './../../models/response/instructor/getInstructor-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreateInstructorRequestModel } from 'src/app/models/request/instructor/create-instructor-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  apiUrl = 'http://localhost:3000/instructor';
  apiurl = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}

  addInstructor(instructor: ICreateInstructorRequestModel) {
    return this.httpClient.post(this.apiUrl, instructor);
  }
  getInstructor(id): Observable<IGetInstructorResponseModel> {
    return this.httpClient.get<IGetInstructorResponseModel>(
      this.apiUrl + '/' + id
    );
  }
  getInstructorById(id): Observable<IGetInstructorResponseModel> {
    return this.httpClient.get<IGetInstructorResponseModel>(
      this.apiurl + '/' + id
    );
  }
  getAllInstructor(): Observable<IGetAllInstructorResponseModel[]> {
    return this.httpClient.get<IGetAllInstructorResponseModel[]>(this.apiUrl);
  }
  updateInstructor(id: number, instructor: IUpdateInstructorRequestModel) {
    return this.httpClient.put(this.apiUrl + '/' + id, instructor);
  }
  instructorDelete(data): Observable<IGetAllInstructorResponseModel> {
    return this.httpClient.delete<IGetAllInstructorResponseModel>(
      this.apiUrl + '/' + data.id
    );
  }
}
