import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampdetailApplicantpageComponent } from './bootcampdetail-applicantpage.component';

describe('BootcampdetailApplicantpageComponent', () => {
  let component: BootcampdetailApplicantpageComponent;
  let fixture: ComponentFixture<BootcampdetailApplicantpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampdetailApplicantpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampdetailApplicantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
