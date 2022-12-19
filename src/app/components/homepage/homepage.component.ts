import { Component, OnInit } from '@angular/core';
import { IGetAllBootcampResponseModel } from 'src/app/models/response/bootcamp/getAllBootcamp-response';
import { IGetAllInstructorResponseModel } from 'src/app/models/response/instructor/getAllInstructor-response';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { InstructorService } from 'src/app/services/instructor/instructor.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  bootcamps: IGetAllBootcampResponseModel[];
  instructors: IGetAllInstructorResponseModel[];
  constructor(    private bootcampService: BootcampService,
    private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.getAllBootcamps();
    
  }

  getAllBootcamps() {
    this.bootcampService
      .getAllBootcamp()
      .subscribe((data) => (this.bootcamps = data));
  }

  getInstructorById() {
    this.instructorService
      .getAllInstructor()
      .subscribe((response) => (this.instructors = response));
  }
}
