import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-sidebar',
  templateUrl: './applicant-sidebar.component.html',
  styleUrls: ['./applicant-sidebar.component.css']
})
export class ApplicantSidebarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
  }
}
