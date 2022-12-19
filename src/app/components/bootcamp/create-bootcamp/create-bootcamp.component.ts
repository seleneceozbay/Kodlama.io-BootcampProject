import { ICreateInstructorRequestModel } from 'src/app/models/request/instructor/create-instructor-request';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor/instructor.service';

@Component({
  selector: 'app-create-bootcamp',
  templateUrl: './create-bootcamp.component.html',
  styleUrls: ['./create-bootcamp.component.css'],
})
export class CreateBootcampComponent implements OnInit {
  bootcampAddForm: FormGroup;
  instructors: ICreateInstructorRequestModel[];

  constructor(
    private formBuilder: FormBuilder,
    private activetedRoute: ActivatedRoute,
    private bootcampService: BootcampService,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.createAddBootcampForm();
    this.getAllInstructors();
  }

  getAllInstructors() {
    this.instructorService.getAllInstructor().subscribe((data) => {
      this.instructors = data;
    });
  }
  createAddBootcampForm() {
    this.bootcampAddForm = this.formBuilder.group({
      instructorId: ['', Validators.required],
      name: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      state: ['', Validators.required],
    });
  }
  addBootcamp() {
    if (this.bootcampAddForm.valid) {
      let bootcampModel = Object.assign({}, this.bootcampAddForm.value);
      this.bootcampService.addBootcamp(bootcampModel).subscribe((data) => {
        alert('Bootcamp Eklendi');
      });
    } else {
      alert('Bootcamp Eklenmedi');
    }
  }
}
