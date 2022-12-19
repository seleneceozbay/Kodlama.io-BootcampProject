import { IUpdateBootcampRequestModel } from './../../../models/request/bootcamp/update-bootcamp-request';
import { IUpdateApplicantRequestModel } from './../../../models/request/applicant/update-applicant-request';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ApplicationService } from './../../../services/application/application.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICreateApplicationRequestModel } from './../../../models/request/application/create-application-request';
import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  createApplicationForm:FormGroup;
  createApplicationModel:ICreateApplicationRequestModel[]=[];
  applicants:IUpdateApplicantRequestModel[];
  bootcamps:IUpdateBootcampRequestModel[];

  constructor(private applicationService:ApplicationService ,private formBuilder:FormBuilder,
    private applicantService:ApplicantService,private bootcampService:BootcampService) { }

  ngOnInit(): void {
    this.createCreateApplicationForm();
    this.getAllApplicant();
    this.getAllBootcamp();
  }
  createCreateApplicationForm() {
    this.createApplicationForm = this.formBuilder.group({
      
      applicantId: ['', Validators.required ],
      bootcampId: ['',Validators.required],
      state: ['',Validators.required],
      
    });
  }

  addApplication(){
    if(this.createApplicationForm.valid){
      let application=Object.assign({},this.createApplicationForm.value)
      this.applicationService.addApplication(application).subscribe(data=>{
        console.log(data)
      })
    }
    
  }

  getAllApplicant(){
    this.applicantService.getAllApplicant().subscribe((data)=>{
      this.applicants=data;
    })
  }

  getAllBootcamp(){
    this.bootcampService.getAllBootcamp().subscribe((data)=>{
      this.bootcamps=data;
    })
  }


  

}
