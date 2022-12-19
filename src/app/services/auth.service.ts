import { ToastrService } from 'ngx-toastr';
import { ILoginModel } from './../models/login-model/loginModel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'http://localhost:3000/users';
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private toastrService: ToastrService
  ) {}

  login(user: ILoginModel) {
    console.log(user);
    return this.httpClient.get<ILoginModel[]>(
      this.apiUrl + '?email=' + user.email + '&password=' + user.password
    );
  }
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.toastrService.info('Çıkış yapıldı');
    this.router.navigate(['']);
  }
}
