import { IGetEmployeeResponseModel } from './../../models/response/employee/getEmployee-response';
import { EmployeeService } from './../../services/employee/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css'],
})
export class EmployeeprofileComponent implements OnInit {
  employee: IGetEmployeeResponseModel;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployee(localStorage.getItem('id'));
  }
  getEmployee(id) {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      this.employee = data;
    });
  }
}
