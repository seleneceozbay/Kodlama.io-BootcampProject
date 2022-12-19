import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { IGetInstructorResponseModel } from 'src/app/models/response/instructor/getInstructor-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructorprofile',
  templateUrl: './instructorprofile.component.html',
  styleUrls: ['./instructorprofile.component.css'],
})
export class InstructorprofileComponent implements OnInit {
  instructor: IGetInstructorResponseModel;
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getInstructor(localStorage.getItem('id'));
  }

  getInstructor(id) {
    this.instructorService.getInstructorById(id).subscribe((data) => {
      this.instructor = data;
    });
  }
}
