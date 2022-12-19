import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGetInstructorResponseModel } from 'src/app/models/response/instructor/getInstructor-response';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css'],
})
export class UpdateInstructorComponent implements OnInit {
  instructorUpdateForm: FormGroup;
  instructors: IGetInstructorResponseModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private instructorService: InstructorService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loadInstructorDetail(params['id']);
    });
  }
  loadInstructorDetail(id) {
    this.instructorService.getInstructor(id).subscribe((data) => {
      this.instructors = data;
      this.createUpdateForm();
    });
  }
  createUpdateForm() {
    this.instructorUpdateForm = this.formBuilder.group({
      firstName: [this.instructors.firstName, Validators.required],
      lastName: [this.instructors.lastName, Validators.required],
      email: [this.instructors.email, Validators.required],
      password: [this.instructors.password, Validators.required],
      companyName: [this.instructors.companyName, Validators.required],
      nationalIdentity: [
        this.instructors.nationalIdentity,
        Validators.required,
      ],
      dateOfBirth: [this.instructors.dateOfBirth, Validators.required],
    });
  }
  update(): void {
    this.instructorService
      .updateInstructor(
        this.activatedRoute.snapshot.params['id'],
        this.instructorUpdateForm.value
      )
      .subscribe((response) => console.log('update'));
  }
}
