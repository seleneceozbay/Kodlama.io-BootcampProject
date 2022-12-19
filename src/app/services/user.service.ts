import { IGetAllInstructorResponseModel } from './../models/response/instructor/getAllInstructor-response';
import { IGetAllEmployeeResponseModel } from './../models/response/employee/getAllEmployee-response';
import { Observable } from 'rxjs';
import { IGetAllApplicantResponseModel } from './../models/response/applicant/getAllApplicant-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiurl: string = 'http://localhost:3000/users';

  constructor(private httpClient:HttpClient) { }

  addApplicant(applicant){
    return this.httpClient.post(this.apiurl,applicant)
  }

  applicantDelete(data):Observable<IGetAllApplicantResponseModel>{
    return this.httpClient.delete<IGetAllApplicantResponseModel>(this.apiurl+'/' +data.id);
  }

  addEmployee(employee){
    return this.httpClient.post(this.apiurl,employee)
  }

  employeeDelete(data):Observable<IGetAllEmployeeResponseModel>{
    return this.httpClient.delete<IGetAllEmployeeResponseModel>(this.apiurl+'/' +data.id);
  }

  
  addInstructor(instructor){
    return this.httpClient.post(this.apiurl,instructor)
  }

  instructorDelete(data):Observable<IGetAllInstructorResponseModel>{
    return this.httpClient.delete<IGetAllInstructorResponseModel>(this.apiurl+'/' +data.id);
  }



}
