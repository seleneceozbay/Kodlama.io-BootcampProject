import { InstructorService } from './../../../../services/instructor/instructor.service';
import { ActivatedRoute } from '@angular/router';
import { IGetInstructorResponseModel } from './../../../../models/response/instructor/getInstructor-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructordetail-instructorpage',
  templateUrl: './instructordetail-instructorpage.component.html',
  styleUrls: ['./instructordetail-instructorpage.component.css'],
})
export class InstructordetailInstructorpageComponent implements OnInit {
  instructors: IGetInstructorResponseModel;
  constructor(private activatedRoute:ActivatedRoute,
    private instructorService:InstructorService) {}

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
