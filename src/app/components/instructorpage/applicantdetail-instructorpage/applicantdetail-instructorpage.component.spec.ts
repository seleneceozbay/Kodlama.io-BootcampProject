import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantdetailInstructorpageComponent } from './applicantdetail-instructorpage.component';

describe('ApplicantdetailInstructorpageComponent', () => {
  let component: ApplicantdetailInstructorpageComponent;
  let fixture: ComponentFixture<ApplicantdetailInstructorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantdetailInstructorpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantdetailInstructorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
