import { ActivatedRoute } from '@angular/router';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponseModel } from './../../../models/response/bootcamp/getAllBootcamp-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-bootcamp',
  templateUrl: './get-bootcamp.component.html',
  styleUrls: ['./get-bootcamp.component.css'],
})
export class GetBootcampComponent implements OnInit {
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
