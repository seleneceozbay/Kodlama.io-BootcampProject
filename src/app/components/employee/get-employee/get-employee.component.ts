import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee/employee.service';
import { IGetEmployeeResponseModel } from './../../../models/response/employee/getEmployee-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  employee: IGetEmployeeResponseModel;
  constructor(
    private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
    this.getEmployee(params['id']));
  }
  getEmployee(id: number) {
    this.employeeService
    .getEmployee(id)
    .subscribe((data) => (this.employee = data));
  }

}
