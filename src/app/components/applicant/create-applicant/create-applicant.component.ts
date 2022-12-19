import { UserService } from './../../../services/user.service';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ICreateApplicantRequestModel } from './../../../models/request/applicant/create-applicant-request';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent implements OnInit {

  createApplicantForm:FormGroup;
  createApplicantModel:ICreateApplicantRequestModel[]=[];
  constructor(private applicantService:ApplicantService,
    private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.createCreateApplicantForm();
  }

  createCreateApplicantForm() {
    this.createApplicantForm = this.formBuilder.group({
      
      firstName: ['', Validators.required ],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      password:['',Validators.required],
      nationalIdentity:['',Validators.required],
      dateOfBirth:['',Validators.required],
      about:['',Validators.required],
      state:[1]
    });
  }

  addApplicant(){
    if(this.createApplicantForm.valid){
      let applicant=Object.assign({},this.createApplicantForm.value)
      this.applicantService.addApplicant(applicant).subscribe(data=>{
        console.log(data)
      }) &&
      this.userService.addApplicant(applicant).subscribe(data=>{
        console.log(data)
      })
    }
  }
}
