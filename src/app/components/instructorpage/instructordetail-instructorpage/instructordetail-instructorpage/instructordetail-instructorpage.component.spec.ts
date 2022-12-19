import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructordetailInstructorpageComponent } from './instructordetail-instructorpage.component';

describe('InstructordetailInstructorpageComponent', () => {
  let component: InstructordetailInstructorpageComponent;
  let fixture: ComponentFixture<InstructordetailInstructorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructordetailInstructorpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructordetailInstructorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
