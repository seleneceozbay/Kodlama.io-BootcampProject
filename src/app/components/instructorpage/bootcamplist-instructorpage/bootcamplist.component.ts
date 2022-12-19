import { InstructorService } from '../../../services/instructor/instructor.service';
import { ActivatedRoute } from '@angular/router';
import { BootcampService } from '../../../services/bootcamp/bootcamp.service';
import { IGetAllBootcampResponseModel } from 'src/app/models/response/bootcamp/getAllBootcamp-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamplist',
  templateUrl: './bootcamplist.component.html',
  styleUrls: ['./bootcamplist.component.css']
})
export class BootcamplistComponentInstructor implements OnInit {

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



