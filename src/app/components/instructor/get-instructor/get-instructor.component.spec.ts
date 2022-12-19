import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInstructorComponent } from './get-instructor.component';

describe('GetInstructorComponent', () => {
  let component: GetInstructorComponent;
  let fixture: ComponentFixture<GetInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
