import { IUpdateEmployeeRequestModel } from './../../models/request/employee/update-employee-request';
import { IGetAllEmployeeResponseModel } from './../../models/response/employee/getAllEmployee-response';
import { Observable } from 'rxjs';
import { IGetEmployeeResponseModel } from './../../models/response/employee/getEmployee-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateEmployeeRequestModel } from 'src/app/models/request/employee/create-employee-request';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'http://localhost:3000/employee';
  url= 'http://localhost:3000/users'
  constructor(private httpClient: HttpClient) {}

  addEmployee(employee: ICreateEmployeeRequestModel) {
    return this.httpClient.post(this.apiUrl, employee);
  }
  getEmployee(id: number): Observable<IGetEmployeeResponseModel> {
    return this.httpClient.get<IGetEmployeeResponseModel>(
      this.apiUrl + '/' + id
    );
  }
  getAllEmployee(): Observable<IGetAllEmployeeResponseModel[]> {
    return this.httpClient.get<IGetAllEmployeeResponseModel[]>(this.apiUrl);
  }
  updateEmployee(id: number, employee: IUpdateEmployeeRequestModel) {
    return this.httpClient.put(this.apiUrl + '/' + id, employee);
  }
  // deleteEmployee(employee: IGetAllEmployeeResponseModel) {
  //   return this.httpClient.delete(this.apiUrl + '/' + employee.id);
  // }
  delete(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
  getEmployeeById(id): Observable<IGetEmployeeResponseModel> {
    return this.httpClient.get<IGetEmployeeResponseModel>(
      this.url + '/' + id
    );
  }
}
