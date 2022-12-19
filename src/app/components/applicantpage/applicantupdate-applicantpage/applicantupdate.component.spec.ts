import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantupdateComponent } from './applicantupdate.component';

describe('ApplicantupdateComponent', () => {
  let component: ApplicantupdateComponent;
  let fixture: ComponentFixture<ApplicantupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
