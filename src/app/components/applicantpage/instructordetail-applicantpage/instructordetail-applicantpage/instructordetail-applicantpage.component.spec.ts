import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructordetailApplicantpageComponent } from './instructordetail-applicantpage.component';

describe('InstructordetailApplicantpageComponent', () => {
  let component: InstructordetailApplicantpageComponent;
  let fixture: ComponentFixture<InstructordetailApplicantpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructordetailApplicantpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructordetailApplicantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
