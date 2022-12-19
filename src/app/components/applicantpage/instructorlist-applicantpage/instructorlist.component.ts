import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../../../services/instructor/instructor.service';
import { IGetAllInstructorResponseModel } from '../../../models/response/instructor/getAllInstructor-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructorlist',
  templateUrl: './instructorlist.component.html',
  styleUrls: ['./instructorlist.component.css']
})
export class InstructorlistComponentApplicant implements OnInit {

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
