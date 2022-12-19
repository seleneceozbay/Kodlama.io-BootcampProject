import { UserService } from './../../../services/user.service';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-instructor',
  templateUrl: './create-instructor.component.html',
  styleUrls: ['./create-instructor.component.css'],
})
export class CreateInstructorComponent implements OnInit {
  instructorAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private instructorService: InstructorService,
    private userService:UserService
  ) {}

  ngOnInit(): void {
    this.createAddInstructorForm();
  }

  createAddInstructorForm() {
    this.instructorAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: [
        '',
        Validators.required,
        // Validators.minLength(10),
        // Validators.maxLength(20),
      ],
      password: ['', Validators.required],
      companyName: ['', Validators.required],
      nationalIdentity: [
        '',
        Validators.required,
        // Validators.minLength(11),
        // Validators.maxLength(11),
      ],
      role:['roleInstructor',Validators.required]
    });
  }
  add() {
    if (this.instructorAddForm.valid) {
      let InstructorModel = Object.assign({}, this.instructorAddForm.value);
      this.instructorService
        .addInstructor(InstructorModel)
        .subscribe((data) => {
          alert('Kayıt Başarılı');
        });
      this.userService.addInstructor(InstructorModel).subscribe();
    } else {
      alert('Hatalı kayıt');
    }
  }
}
