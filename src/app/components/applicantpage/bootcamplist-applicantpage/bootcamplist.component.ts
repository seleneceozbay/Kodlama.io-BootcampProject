import { ApplicationService } from './../../../services/application/application.service';
import { ICreateBootcampRequestModel } from './../../../models/request/bootcamp/create-bootcamp-request';
import { InstructorService } from '../../../services/instructor/instructor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BootcampService } from '../../../services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponseModel } from 'src/app/models/response/bootcamp/getAllBootcamp-response';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bootcamplist',
  templateUrl: './bootcamplist.component.html',
  styleUrls: ['./bootcamplist.component.css']
})
export class BootcamplistComponentApplicant implements OnInit {

  bootcamps: IGetAllBootcampResponseModel[] = [];
  setBootcamp: ICreateBootcampRequestModel;
  constructor(private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,
    private instructorService:InstructorService,
    private toastrService:ToastrService,
    private router:Router,
    private applicationService:ApplicationService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllBootcamp());
  }

  getAllBootcamp() {
    this.bootcampService
      .getAllBootcamp()
      .subscribe((data) => (this.bootcamps = data));
  }

  getInstructorById(id: number) {
    this.instructorService.getInstructor(id).subscribe((data) => {
      console.log(data.firstName);
    });
  }

  add(bootcamp: any) {
    this.setBootcamp = bootcamp;
    this.send();
    this.toastrService.success('Başvuru Yapıldı', 'Başarılı');

    this.router.navigate(['applicant/applicant-profile']);
  }
  send() {
    let bootcampData = Object.assign({});

    bootcampData.bootcampId = this.setBootcamp.id;
    bootcampData.bootcampName = this.setBootcamp.name;
    bootcampData.instructorName = this.setBootcamp.instructorName;
    bootcampData.state = 1;
    bootcampData.applicantId = localStorage.getItem('id');
    this.applicationService.add(bootcampData).subscribe();
  }



}
