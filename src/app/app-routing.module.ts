import { UpdateherselfComponent } from './components/updateherself/updateherself.component';
import { InstructorupdateComponent } from './components/instructorpage/instructorupdate-instructorpage/instructorupdate.component';
import { EmployeeprofileComponent } from './components/employeeprofile/employeeprofile.component';
import { InstructorprofileComponent } from './components/instructorpage/instructorprofile/instructorprofile.component';
import { AddblacklistComponent } from './components/instructorpage/addblacklist/addblacklist.component';
import { ApplicantprofileComponent } from './components/applicantpage/applicantprofile/applicantprofile.component';

import { ApplicantdetailApplicantpageComponent } from './components/applicantpage/applicantdetail-applicantpage/applicantdetail-applicantpage.component';
import { InstructordetailApplicantpageComponent } from './components/applicantpage/instructordetail-applicantpage/instructordetail-applicantpage/instructordetail-applicantpage.component';
import { InstructordetailInstructorpageComponent } from './components/instructorpage/instructordetail-instructorpage/instructordetail-instructorpage/instructordetail-instructorpage.component';

import { InstructorhomeComponent } from './components/instructorhome/instructorhome.component';
import { InstructorlistInstructorpageComponent } from './components/instructorpage/instructorlist-instructorpage/instructorlist-instructorpage.component';

import { ApplicanthomeComponent } from './components/applicanthome/applicanthome.component';
import { BootcamplistComponentInstructor } from './components/instructorpage/bootcamplist-instructorpage/bootcamplist.component';
import { ApplicantupdateComponentApplicant } from './components/applicantpage/applicantupdate-applicantpage/applicantupdate.component';
import { ApplicantlistComponentInstructor } from './components/instructorpage/applicantlist-instructorpage/applicantlist.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { GetAllBlacklistComponent } from './components/blacklist/get-all-blacklist/get-all-blacklist.component';
import { GetAllEmployeeComponent } from './components/employee/get-all-employee/get-all-employee.component';
import { GetEmployeeComponent } from './components/employee/get-employee/get-employee.component';
import { GetAllBootcampComponent } from './components/bootcamp/get-all-bootcamp/get-all-bootcamp.component';
import { GetBootcampComponent } from './components/bootcamp/get-bootcamp/get-bootcamp.component';
import { GetBlacklistComponent } from './components/blacklist/get-blacklist/get-blacklist.component';
import { GetAllApplicationComponent } from './components/application/get-all-application/get-all-application.component';
import { GetApplicationComponent } from './components/application/get-application/get-application.component';
import { GetAllApplicantComponent } from './components/applicant/get-all-applicant/get-all-applicant.component';
import { GetApplicantComponent } from './components/applicant/get-applicant/get-applicant.component';
import { UpdateInstructorComponent } from './components/instructor/update-instructor/update-instructor.component';
import { GetAllInstructorComponent } from './components/instructor/get-all-instructor/get-all-instructor.component';
import { GetInstructorComponent } from './components/instructor/get-instructor/get-instructor.component';
import { CreateInstructorComponent } from './components/instructor/create-instructor/create-instructor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateApplicantComponent } from './components/applicant/create-applicant/create-applicant.component';
import { UpdateApplicantComponent } from './components/applicant/update-applicant/update-applicant.component';
import { CreateApplicationComponent } from './components/application/create-application/create-application.component';
import { UpdateApplicationComponent } from './components/application/update-application/update-application.component';
import { CreateBlacklistComponent } from './components/blacklist/create-blacklist/create-blacklist.component';
import { UpdateBlacklistComponent } from './components/blacklist/update-blacklist/update-blacklist.component';
import { CreateBootcampComponent } from './components/bootcamp/create-bootcamp/create-bootcamp.component';
import { UpdateBootcampComponent } from './components/bootcamp/update-bootcamp/update-bootcamp.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { LoginguardGuard } from './guards/loginguard.guard';
import { InstructorlistComponentApplicant } from './components/applicantpage/instructorlist-applicantpage/instructorlist.component';
import { ApplicantlistComponentApplicant } from './components/applicantpage/applicantlist-applicantpage/applicantlist.component';
import { BootcamplistComponentApplicant } from './components/applicantpage/bootcamplist-applicantpage/bootcamplist.component';
import { BlacklistComponentInstructor } from './components/instructorpage/blacklist-instructorpage/blacklist.component';
import { BootcampdetailInstructorpageComponent } from './components/instructorpage/bootcampdetail-instructorpage/bootcampdetail-instructorpage.component';
import { ApplicantdetailInstructorpageComponent } from './components/instructorpage/applicantdetail-instructorpage/applicantdetail-instructorpage.component';

const routes: Routes = [
  //admin start
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginguardGuard],
    children: [
      { path: 'admin-instructor', component: GetAllInstructorComponent },
      { path: 'admin-applicants', component: GetAllApplicantComponent },
      { path: 'admin-application', component: GetAllApplicationComponent },
      { path: 'admin-blacklist', component: GetAllBlacklistComponent },
      { path: 'admin-bootcamp', component: GetAllBootcampComponent },
      { path: 'admin-employee', component: GetAllEmployeeComponent },

      //Main Child Finish

      //Child of admin instructor
      {
        path: 'admin-instructor/create-intructor',
        component: CreateInstructorComponent,
      },
      {
        path: 'admin-instructor/instructor/:id',
        component: GetInstructorComponent,
      },
      {
        path: 'admin-instructor/update-instructor/:id',
        component: UpdateInstructorComponent,
      },
      //End of admin instructor

      //Child of admin applicant
      {
        path: 'admin-applicant/create-applicant',
        component: CreateApplicantComponent,
      },
      {
        path: 'admin-applicant/update-applicant/:id',
        component: UpdateApplicantComponent,
      },
      {
        path: 'admin-applicant/applicant/:id',
        component: GetApplicantComponent,
      },
      //End of admin applicant

      //Child of admin application
      {
        path: 'admin-application/create-application',
        component: CreateApplicationComponent,
      },
      {
        path: 'admin-application/application/:id',
        component: GetApplicationComponent,
      },
      {
        path: 'admin-application/update-application/:id',
        component: UpdateApplicationComponent,
      },
      //End of admin application

      //Child of admin blacklist
      {
        path: 'admin-blacklist/create-blacklist/:id',
        component: CreateBlacklistComponent,
      },

      {
        path: 'admin-blacklist/blacklist',
        component: GetAllBlacklistComponent,
      },
      {
        path: 'admin-blacklist/update-blacklist/:id',
        component: UpdateBlacklistComponent,
      },
      //End of admin blacklist

      //Child of admin bootcamp
      {
        path: 'admin-bootcamp/create-bootcamp',
        component: CreateBootcampComponent,
      },
      { path: 'admin-bootcamp/bootcamp/:id', component: GetBootcampComponent },
      {
        path: 'admin-bootcamp/update-bootcamp/:id',
        component: UpdateBootcampComponent,
      },
      //End of admin bootcamp

      //Child of admin employee
      {
        path: 'admin-employee/create-employee',
        component: CreateEmployeeComponent,
      },
      { path: 'admin-employee/employee/:id', component: GetEmployeeComponent },
      {
        path: 'admin-employee/update-employee/:id',
        component: UpdateEmployeeComponent,
      },
      {
        path:'admin-profile',component:EmployeeprofileComponent
      },
      {
        path:'admin-profile/update/:id',component:UpdateherselfComponent
      }
    ],
  },
  {
    path: 'applicant',
    component: ApplicanthomeComponent,
    canActivate: [LoginguardGuard],
    children: [
      {
        path: 'applicant-instructors',
        component: InstructorlistComponentApplicant,
      },
      {
        path: 'applicant-applicants',
        component: ApplicantlistComponentApplicant,
      },
      // { path: 'admin-application', component: GetAllApplicationComponent },
      // { path: 'admin-blacklist', component: GetAllBlacklistComponent },
      {
        path: 'applicant-bootcamps',
        component: BootcamplistComponentApplicant,
      },
      // { path: 'applicant-bootcamps/bootcamp/:id', component: BootcampdetailComponentApplicant },

      //Main Child Finish

      //Child of admin instructor

      {
        path: 'applicant-instructors/instructordetail/:id',
        component: InstructordetailApplicantpageComponent,
      },

      //Child of admin applicant

      {
        path: 'applicant-applicants/update-applicant/:id',
        component: ApplicantupdateComponentApplicant,
      },
      {
        path: 'applicant-applicants/applicantdetail/:id',
        component: ApplicantdetailApplicantpageComponent,
      },
      {
        path:'applicant-profile',component:ApplicantprofileComponent
       },
       
      //End of admin applicant

      //Child of admin application
      // {
      //   path: 'admin-application/create-application',
      //   component: CreateApplicationComponent,
      // },
      // {
      //   path: 'admin-application/application/:id',
      //   component: GetApplicationComponent,
      // },
      // {
      //   path: 'admin-application/update-application/:id',
      //   component: UpdateApplicationComponent,
      // },

      {
        path: 'applicant-bootcamps/bootcamp/:id',
        component: GetBootcampComponent,
      },
    ],
  },

  {
    path: 'instructor',
    component: InstructorhomeComponent,
    canActivate: [LoginguardGuard],
    children: [
      {
        path: 'instructor-instructors',
        component: InstructorlistInstructorpageComponent,
      },
      {
        path: 'instructor-applicants',
        component: ApplicantlistComponentInstructor,
      },
      // { path: 'admin-application', component: GetAllApplicationComponent },
      { path: 'instructor-blacklist', component: BlacklistComponentInstructor },
      {
        path: 'instructor-bootcamps',
        component: BootcamplistComponentInstructor,
      },
      {
        path: 'instructor-bootcamps/bootcamp/:id',
        component: BootcampdetailInstructorpageComponent,
      },

      //Main Child Finish

      //Child of admin instructor

      {
        path: 'instructor-instructors/instructor/:id',
        component: InstructordetailInstructorpageComponent,
      },
      {
        path:'instructor-profile',component:InstructorprofileComponent
      },

      //Child of admin applicant

      {
        path: 'instructor-applicants/instructor/:id',
        component: ApplicantdetailInstructorpageComponent,
      },
      {
        path:'instructor-blacklist/create-blacklist/:id',component:AddblacklistComponent
      },
      {
        path:'instructor-profile/update/:id',component:InstructorupdateComponent
      }
      //End of admin applicant

      //Child of admin application
      // {
      //   path: 'admin-application/create-application',
      //   component: CreateApplicationComponent,
      // },
      // {
      //   path: 'admin-application/application/:id',
      //   component: GetApplicationComponent,
      // },
      // {
      //   path: 'admin-application/update-application/:id',
      //   component: UpdateApplicationComponent,
      // },

      // { path: 'instructor-bootcamps/bootcamp/:id', component: GetBootcampComponent },
    ],
  },

  // Employee

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', component: HomepageComponent },
  // { path: 'instructors', component: GetAllInstructorComponent },
  // { path: 'instructors/instructor/:id', component: GetInstructorComponent },
  // { path: 'admin/applicants', component: GetAllApplicantComponent},
  // { path: 'admin/applicant/:id', component: GetApplicantComponent},
  // { path: 'applicants/admin-bootcamp', component: GetAllApplicantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
