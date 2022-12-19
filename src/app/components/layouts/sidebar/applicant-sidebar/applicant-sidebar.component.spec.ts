import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSidebarComponent } from './applicant-sidebar.component';

describe('ApplicantSidebarComponent', () => {
  let component: ApplicantSidebarComponent;
  let fixture: ComponentFixture<ApplicantSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
