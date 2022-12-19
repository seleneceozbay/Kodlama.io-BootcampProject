import { IUpdateBootcampRequestModel } from './../../../models/request/bootcamp/update-bootcamp-request';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IUpdateApplicantRequestModel } from './../../../models/request/applicant/update-applicant-request';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IGetApplicationResponseModel } from './../../../models/response/application/getApplication-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent implements OnInit {

  application:IGetApplicationResponseModel;
  applicationUpdateForm:FormGroup;
  applicants:IUpdateApplicantRequestModel[];
  bootcamps:IUpdateBootcampRequestModel[];
  constructor(private applicationService:ApplicationService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private applicantService:ApplicantService,
    private bootcampService:BootcampService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.loadApplicationDetail(params["id"]);
    })
    this.getAllApplicant();
    this.getAllBotcamps();
  }

  loadApplicationDetail(id){
    this.applicationService.getApplicationById(id).subscribe((data)=>{
      this.application=data;
      this.createApplicationUpdateForm();
    })
  }

  createApplicationUpdateForm(){
    this.applicationUpdateForm=this.formBuilder.group({
      applicantId:[this.application.applicantId,Validators.required],
      bootcampId:[this.application.bootcampId,Validators.required],
      state:[this.application.state,Validators.required]
      
    })
  }

  updateApplication(){
    this.applicationService.updateApplication(this.activatedRoute.snapshot.params['id'],
    this.applicationUpdateForm.value).subscribe((response)=>console.log('update'));
  }

  getAllApplicant(){
    this.applicantService.getAllApplicant().subscribe((data)=>{
      this.applicants=data;
    })

  }
  getAllBotcamps(){
    this.bootcampService.getAllBootcamp().subscribe((data)=>{
      this.bootcamps=data;
    })
  }
  


}
