import { Component, Input, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/services/applicant/applicant.service';

@Component({
  selector: 'app-applicant-header',
  templateUrl: './applicant-header.component.html',
  styleUrls: ['./applicant-header.component.css'],
})
export class ApplicantHeaderComponent implements OnInit {
  users: any;
  filteredUser: any;
  firstName: string = '';
  lastName: string = '';

  constructor(private applicantService: ApplicantService) {}

  ngOnInit(): void {
    this.getApplicants();
  }

  getApplicants() {
    var id = localStorage.getItem('id');
    this.applicantService.getAllUsers().subscribe((data) => {
      this.users = data;
      this.filteredUser = this.users.filter((data) => data.id == Number(id));
      this.firstName = this.filteredUser[0].firstName;
      this.lastName = this.filteredUser[0].lastName;
    });
  }
}
