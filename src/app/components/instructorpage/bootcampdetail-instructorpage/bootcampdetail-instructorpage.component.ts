import { ActivatedRoute } from '@angular/router';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponseModel } from 'src/app/models/response/bootcamp/getAllBootcamp-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcampdetail-instructorpage',
  templateUrl: './bootcampdetail-instructorpage.component.html',
  styleUrls: ['./bootcampdetail-instructorpage.component.css']
})
export class BootcampdetailInstructorpageComponent implements OnInit {

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
