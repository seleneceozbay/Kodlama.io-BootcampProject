import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { IGetApplicationResponseModel } from './../../../models/response/application/getApplication-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-application',
  templateUrl: './get-application.component.html',
  styleUrls: ['./get-application.component.css']
})
export class GetApplicationComponent implements OnInit {

  applicationget:IGetApplicationResponseModel;
  constructor(private applicationService:ApplicationService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getApplicationById();
  }

  getApplicationById(){
    this.activatedRoute.params.subscribe((params)=>this.getApplication(params['id']));
  }

  getApplication(id){
    this.applicationService.getApplicationById(id).subscribe((data)=>{
      this.applicationget=data;
    })}




}
