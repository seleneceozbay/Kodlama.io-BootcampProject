import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from 'src/app/services/applicant/applicant.service';
import { IGetApplicantResponseModel } from './../../../models/response/applicant/getApplicant-response';
import { ApplicationService } from './../../../services/application/application.service';
import { ICreateBootcampRequestModel } from './../../../models/request/bootcamp/create-bootcamp-request';
import { ICreateApplicationRequestModel } from './../../../models/request/application/create-application-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicantprofile',
  templateUrl: './applicantprofile.component.html',
  styleUrls: ['./applicantprofile.component.css']
})
export class ApplicantprofileComponent implements OnInit {

  applications:ICreateApplicationRequestModel[]=[];
  bootcamps : ICreateBootcampRequestModel[]=[];
  applicant:IGetApplicantResponseModel;
  constructor(private applicationService:ApplicationService,
    private applicantService:ApplicantService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getApplication(localStorage.getItem("id"))
    this.getApplicant(localStorage.getItem("id"))
  }

  
  getApplication(id:string){
    this.applicationService.getUserId(id).subscribe(data=>{this.applications=data
    
      console.log(data)
    })

  }


  getApplicant(id){
    this.applicantService.getApplicantById(id).subscribe((data)=>{
      this.applicant=data;
    });
  }
}
