import { EmployeeService } from './../../../services/employee/employee.service';
import { ActivatedRoute } from '@angular/router';
import { IGetEmployeeResponseModel } from './../../../models/response/employee/getEmployee-response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeUpdateForm: FormGroup;
  employees: IGetEmployeeResponseModel;
  constructor(
    private activatedRoute:ActivatedRoute,
    private employeeService:EmployeeService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loadEmployeeDetail(params['id']);
    });
  }
  loadEmployeeDetail(id){
    this.employeeService.getEmployee(id).subscribe((data) => {
      this.employees = data;
      this.createUpdateForm();
    })
  }
  createUpdateForm(){
    this.employeeUpdateForm = this.formBuilder.group({
      firstName: [this.employees.firstName, Validators.required],
      lastName: [this.employees.lastName, Validators.required],
      email: [this.employees.email, Validators.required],
      password: [this.employees.password, Validators.required],
      nationalIdentity: [this.employees.nationalIdentity, Validators.required],
      dateOfBirth: [this.employees.dateOfBirth, Validators.required],
      position: [this.employees.position, Validators.required]
    });
  }
  update(): void {
    this.employeeService.updateEmployee(
      this.activatedRoute.snapshot.params['id'],
      this.employeeUpdateForm.value
    )
    .subscribe((response) => console.log('update'));
  }

}
