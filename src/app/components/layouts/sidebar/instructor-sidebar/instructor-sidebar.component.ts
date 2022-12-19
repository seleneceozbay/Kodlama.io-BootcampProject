import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-sidebar',
  templateUrl: './instructor-sidebar.component.html',
  styleUrls: ['./instructor-sidebar.component.css']
})
export class InstructorSidebarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
  }
}
