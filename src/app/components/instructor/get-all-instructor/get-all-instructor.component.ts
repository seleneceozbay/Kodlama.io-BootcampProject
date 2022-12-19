import { IGetAllInstructorResponseModel } from './../../../models/response/instructor/getAllInstructor-response';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-instructor',
  templateUrl: './get-all-instructor.component.html',
  styleUrls: ['./get-all-instructor.component.css'],
})
export class GetAllInstructorComponent implements OnInit {
  instructors: IGetAllInstructorResponseModel[] = [];
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllInstructor();
  }
  getAllInstructor() {
    this.instructorService
      .getAllInstructor()
      .subscribe((data) => (this.instructors = data));
  }
  deleteInstructor(data): void {
    this.instructors = this.instructors.filter((a) => a !== data);
    this.instructorService.instructorDelete(data).subscribe();
  }
}
