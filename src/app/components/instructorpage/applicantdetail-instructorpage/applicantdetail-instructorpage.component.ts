import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from 'src/app/services/applicant/applicant.service';
import { IGetApplicantResponseModel } from './../../../models/response/applicant/getApplicant-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicantdetail-instructorpage',
  templateUrl: './applicantdetail-instructorpage.component.html',
  styleUrls: ['./applicantdetail-instructorpage.component.css']
})
export class ApplicantdetailInstructorpageComponent implements OnInit {

  applicantget:IGetApplicantResponseModel;
  constructor(private applicantService:ApplicantService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getApplicantById();
  }

  getApplicantById(){
    this.activatedRoute.params.subscribe((params)=>this.getApplicant(params['id']));
  }


  getApplicant(id){
    this.applicantService.getApplicantById(id).subscribe((data)=>{
      this.applicantget=data;
    });
    

  }

}
