import { ILoginModel } from './../../models/login-model/loginModel';
import { Router } from '@angular/router';
import { ITokenModel } from './../../models/token-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginAddForm: FormGroup;
  tokenModel: ITokenModel;
  role: ILoginModel;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createEmployeeLoginForm();
  }

  createEmployeeLoginForm() {
    this.loginAddForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // login(){
  //   if(this.employeeLoginForm.valid){

  //     let loginModel:IEmployeeLoginModel=this.employeeLoginForm.value;
  //     this.employeeloginService.employeeLogin(loginModel).subscribe((data)=>{
  //       if(data.length>0){
  //         this.tokenModel=data[0];
  //         localStorage.setItem('token',this.tokenModel.token)
  //         // this.router.navigate(["products"])
  //         // this.toastr.success('Kayıt başarılı')
  //         this.router.navigate(['admin'])
  //       }
  //       else{
  //         // this.toastr.error('Kayıt başarısız.')
  //       }
  //     })
  //   }
  // }
  login() {
    if (this.loginAddForm.valid) {
      this.authService.login(this.loginAddForm.value).subscribe((data) => {
        if (data) {
          data[0].role == 'roleInstructor'
            ? this.router.navigate(['instructor'])
            : data[0].role == 'roleAdmin'
            ? this.router.navigate(['admin'])
            : this.router.navigate(['applicant']);
          localStorage.setItem('token', data[0].token);
          localStorage.setItem('role', data[0].role);
          localStorage.setItem('id',data[0].id)
          this.toastrService.success("Giriş Başarılı")
        } else {
          this.toastrService.error("Giriş Başarısız")
        }
      });
    }
  }
}
