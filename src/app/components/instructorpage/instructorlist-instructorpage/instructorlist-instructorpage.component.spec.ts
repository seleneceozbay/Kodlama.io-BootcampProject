import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorlistInstructorpageComponent } from './instructorlist-instructorpage.component';

describe('InstructorlistInstructorpageComponent', () => {
  let component: InstructorlistInstructorpageComponent;
  let fixture: ComponentFixture<InstructorlistInstructorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorlistInstructorpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorlistInstructorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
