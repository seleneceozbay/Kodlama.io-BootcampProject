import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponseModel } from './../../../models/response/bootcamp/getAllBootcamp-response';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IGetAllApplicantResponseModel } from './../../../models/response/applicant/getAllApplicant-response';
import { ApplicationService } from './../../../services/application/application.service';
import { IGetAllApplicationResponseModel } from './../../../models/response/application/getAllApplication-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-application',
  templateUrl: './get-all-application.component.html',
  styleUrls: ['./get-all-application.component.css']
})
export class GetAllApplicationComponent implements OnInit {

  applications:IGetAllApplicationResponseModel[]=[];
  applicants:IGetAllApplicantResponseModel[];
  bootcamps:IGetAllBootcampResponseModel[];
  constructor(private applicationService:ApplicationService,
    private applicantService:ApplicantService,
    private bootcampService:BootcampService) { }

  ngOnInit(): void {
    this.getAllApplication();
    this.getAllApplicant();
    this.getAllBootcamp();
  }
  getAllApplication(){
    this.applicationService.getAllApplication().subscribe(data=>this.applications=data)
  }

  deleteApplication(data):void{
    this.applications=this.applications.filter((c)=> c !== data);
    this.applicationService.applicationDelete(data).subscribe();
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
