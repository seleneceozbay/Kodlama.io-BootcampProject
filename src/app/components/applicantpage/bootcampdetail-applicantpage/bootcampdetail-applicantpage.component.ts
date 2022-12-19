import { ActivatedRoute } from '@angular/router';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponseModel } from 'src/app/models/response/bootcamp/getAllBootcamp-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcampdetail-applicantpage',
  templateUrl: './bootcampdetail-applicantpage.component.html',
  styleUrls: ['./bootcampdetail-applicantpage.component.css']
})
export class BootcampdetailApplicantpageComponent implements OnInit {

  bootcamps: IGetAllBootcampResponseModel;
  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getBootcamp(params['id'])
    );
  }

  getBootcamp(id: number) {
    this.bootcampService
      .getBootcamp(id)
      .subscribe((data) => (this.bootcamps = data));
  }
}


