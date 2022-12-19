import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantprofileComponent } from './applicantprofile.component';

describe('ApplicantprofileComponent', () => {
  let component: ApplicantprofileComponent;
  let fixture: ComponentFixture<ApplicantprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
