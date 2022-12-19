import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateApplicantRequestModel } from 'src/app/models/request/applicant/create-applicant-request';
import { ApplicantService } from 'src/app/services/applicant/applicant.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  createApplicantForm: FormGroup;
  createApplicantModel: ICreateApplicantRequestModel[] = [];
  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCreateApplicantForm();
  }
  
  createCreateApplicantForm() {
    this.createApplicantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      about: ['', Validators.required],
      role: ['roleApplicant', Validators.required],
      state: [1],
      token: [462452156547856],
      expiration: ['sdfsdfhjfghgdfad'],
    });
  }

  addApplicant() {
    if (this.createApplicantForm.valid) {
      let applicant = Object.assign({}, this.createApplicantForm.value);
      this.applicantService.addApplicant(applicant).subscribe((data) => {
        console.log(data);
      });
      this.userService.addApplicant(applicant).subscribe((data) => {
        if (data) console.log(data);
        this.scroolToTop();
        this.toastrService.success('Kayıt Başarılı');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 200);
      });
    } else {
      this.scroolToTop();
      this.toastrService.warning('Lütfen tüm alanları doldurunuz!');
    }
  }

  scroolToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
