import { UserService } from '../../../services/user.service';
import { ApplicantService } from '../../../services/applicant/applicant.service';
import { IGetAllApplicantResponseModel } from '../../../models/response/applicant/getAllApplicant-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicantlist',
  templateUrl: './applicantlist.component.html',
  styleUrls: ['./applicantlist.component.css']
})
export class ApplicantlistComponentApplicant implements OnInit {

  applicants:IGetAllApplicantResponseModel[]=[];
  constructor(private applicantService:ApplicantService ) { }

  ngOnInit(): void {
    this.getAllApplicant();
  }

  getAllApplicant(){
    this.applicantService.getAllApplicant().subscribe(data=>{this.applicants=data})
  }

}
