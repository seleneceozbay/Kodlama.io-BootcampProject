import { ActivatedRoute } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { IGetAllInstructorResponseModel } from 'src/app/models/response/instructor/getAllInstructor-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructorlist-instructorpage',
  templateUrl: './instructorlist-instructorpage.component.html',
  styleUrls: ['./instructorlist-instructorpage.component.css']
})
export class InstructorlistInstructorpageComponent implements OnInit {

  instructors: IGetAllInstructorResponseModel[] = [];
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllInstructor();
  }

  getAllInstructor() {
    this.instructorService
      .getAllInstructor()
      .subscribe((data) => (this.instructors = data));
  }

}


