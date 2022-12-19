import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllInstructorComponent } from './get-all-instructor.component';

describe('GetAllInstructorComponent', () => {
  let component: GetAllInstructorComponent;
  let fixture: ComponentFixture<GetAllInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
