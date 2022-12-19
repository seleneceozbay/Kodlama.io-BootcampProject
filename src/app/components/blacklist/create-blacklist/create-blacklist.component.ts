import { ICreateApplicantRequestModel } from './../../../models/request/applicant/create-applicant-request';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlacklistService } from 'src/app/services/blacklist/blacklist.service';

@Component({
  selector: 'app-create-blacklist',
  templateUrl: './create-blacklist.component.html',
  styleUrls: ['./create-blacklist.component.css'],
})
export class CreateBlacklistComponent implements OnInit {
  blacklistAddForm: FormGroup;
  applicants: ICreateApplicantRequestModel[];
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private blacklistService: BlacklistService,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.createAddBlacklistForm();
    
  }

  id:number;

  getAllApplicants() {
    this.applicantService.getAllApplicant().subscribe((data) => {
      this.applicants = data;
    });
  }
  createAddBlacklistForm() {
    this.blacklistAddForm = this.formBuilder.group({
      date: ['', Validators.required],
      reason: ['', Validators.required],
    });
  }

  getApplicantById(id){
    this.applicantService.getApplicantById(id).subscribe((data)=>{
      console.log(data.firstName);
    })

  }
  add() {
    if (this.blacklistAddForm.valid) {
      let BlacklistModel = Object.assign({}, this.blacklistAddForm.value);
      this.activatedRoute.params.subscribe((params)=>{
        BlacklistModel.applicantId=params['id'];
        this.id=params['id'];
      });
      this.applicantService.getApplicantById(BlacklistModel.applicantId).subscribe((data)=>{
        BlacklistModel.applicantName=data.firstName+' '+data.lastName;

        this.blacklistService.addBlacklist(BlacklistModel).subscribe((data)=>{

        });
      });
      
    this.updateState(); 
    
    } 
    else {
      alert('Hatalı Kayıt');
    }
  }

  updateState(){
    this.applicantService.updateState(this.id,0).subscribe((value)=>{
      
    })
  }


  
}
