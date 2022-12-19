import { ActivatedRoute } from '@angular/router';
import { IGetApplicantResponseModel } from '../../../models/response/applicant/getApplicant-response';
import { ApplicantService } from '../../../services/applicant/applicant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicantupdate',
  templateUrl: './applicantupdate.component.html',
  styleUrls: ['./applicantupdate.component.css']
})
export class ApplicantupdateComponentApplicant implements OnInit {

  applicants:IGetApplicantResponseModel;
  applicantUpdateForm:FormGroup;
  constructor(private applicantService:ApplicantService,private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.loadApplicantDetail(params["id"]);
    })
  }


  loadApplicantDetail(id){
    this.applicantService.getApplicantById(id).subscribe((data)=>{
      this.applicants=data;
      this.createApplicantUpdateForm();
    })
  }


  createApplicantUpdateForm(){
    this.applicantUpdateForm=this.formBuilder.group({
      firstName:[this.applicants.firstName,Validators.required],
      lastName:[this.applicants.lastName,Validators.required],
      email:[this.applicants.email,Validators.required],
      password:[this.applicants.password,Validators.required],
      nationalIdentity:[this.applicants.nationalIdentity,Validators.required],
      dateOfBirth:[this.applicants.dateOfBirth,Validators.required],
      about:[this.applicants.about,Validators.required],

    
    })}

    updateAplicant():void {
      this.applicantService
        .updateApplicant(
          this.activatedRoute.snapshot.params['id'],
          this.applicantUpdateForm.value
        )
        .subscribe((response) => console.log('update'));
        
      }




}
