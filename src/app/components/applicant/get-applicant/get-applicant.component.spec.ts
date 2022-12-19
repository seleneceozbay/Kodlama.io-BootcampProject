import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApplicantComponent } from './get-applicant.component';

describe('GetApplicantComponent', () => {
  let component: GetApplicantComponent;
  let fixture: ComponentFixture<GetApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
