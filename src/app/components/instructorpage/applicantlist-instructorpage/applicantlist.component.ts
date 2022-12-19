import { ApplicantService } from '../../../services/applicant/applicant.service';
import { UserService } from '../../../services/user.service';
import { IGetAllApplicantResponseModel } from '../../../models/response/applicant/getAllApplicant-response';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-applicantlist',
  templateUrl: './applicantlist.component.html',
  styleUrls: ['./applicantlist.component.css']
})
export class ApplicantlistComponentInstructor implements OnInit {

  applicants:IGetAllApplicantResponseModel[]=[];
  constructor(private applicantService:ApplicantService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.getAllApplicant();
  }

  getAllApplicant(){
    this.applicantService.getAllApplicant().subscribe(data=>this.applicants=data)
  }

}
