import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IGetApplicantResponseModel } from './../../../models/response/applicant/getApplicant-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
})
export class UpdateApplicantComponent implements OnInit {

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
      image:[this.applicants.image,Validators.required],
      state:['1',Validators.required],
      role:['roleApplicant',Validators.required],
      


    
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
