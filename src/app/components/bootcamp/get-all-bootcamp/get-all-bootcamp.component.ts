import { InstructorService } from './../../../services/instructor/instructor.service';
import { ActivatedRoute } from '@angular/router';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponseModel } from './../../../models/response/bootcamp/getAllBootcamp-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-bootcamp',
  templateUrl: './get-all-bootcamp.component.html',
  styleUrls: ['./get-all-bootcamp.component.css'],
})
export class GetAllBootcampComponent implements OnInit {
  bootcamps: IGetAllBootcampResponseModel[] = [];
  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,
    private instructorService:InstructorService
  ) {}

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
  deleteBootcamp(data): void {
    this.bootcamps = this.bootcamps.filter((a) => a !== data);
    this.bootcampService.bootcampDelete(data).subscribe();
  }
}
