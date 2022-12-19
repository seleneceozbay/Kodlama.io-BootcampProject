import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantdetailApplicantpageComponent } from './applicantdetail-applicantpage.component';

describe('ApplicantdetailApplicantpageComponent', () => {
  let component: ApplicantdetailApplicantpageComponent;
  let fixture: ComponentFixture<ApplicantdetailApplicantpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantdetailApplicantpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantdetailApplicantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
