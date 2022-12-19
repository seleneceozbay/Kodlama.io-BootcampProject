import { IGetInstructorResponseModel } from './../../../../models/response/instructor/getInstructor-response';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../../services/instructor/instructor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructordetail-applicantpage',
  templateUrl: './instructordetail-applicantpage.component.html',
  styleUrls: ['./instructordetail-applicantpage.component.css'],
})
export class InstructordetailApplicantpageComponent implements OnInit {
  instructors: IGetInstructorResponseModel;
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getInstructor(params['id']);
      console.log(params['id']);
    });
  }
  getInstructor(id: number) {
    this.instructorService.getInstructor(id).subscribe((data) => {
      this.instructors = data;
      console.log(data);
    });
  }
}
