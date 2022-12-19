import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllApplicantComponent } from './get-all-applicant.component';

describe('GetAllApplicantComponent', () => {
  let component: GetAllApplicantComponent;
  let fixture: ComponentFixture<GetAllApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
