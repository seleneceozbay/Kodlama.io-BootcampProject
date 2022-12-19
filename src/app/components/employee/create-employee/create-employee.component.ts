import { UserService } from './../../../services/user.service';
import { EmployeeService } from './../../../services/employee/employee.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createEmployeeForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.createAddEmployeeForm();
  }

  createAddEmployeeForm() {
    this.createEmployeeForm = this.formBuilder.group({
      firstName: [ '', Validators.required],
      lastName: [ '', Validators.required],
      email: [ '', Validators.required],
      password: [ '', Validators.required],
      nationalIdentity: [ '', Validators.required],
      dateOfBirth: [ '', Validators.required],
      position: [ '', Validators.required],
      role:['roleEmployee',Validators.required]
    })
  }
  
  addEmployee(){
    if(this.createEmployeeForm.valid){
      let employee = Object.assign({},this.createEmployeeForm.value)
      this.employeeService.addEmployee(employee).subscribe(data =>{
        console.log(data)
      })
      this.userService.addEmployee(employee).subscribe();
    }
  }

}
