import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampdetailInstructorpageComponent } from './bootcampdetail-instructorpage.component';

describe('BootcampdetailInstructorpageComponent', () => {
  let component: BootcampdetailInstructorpageComponent;
  let fixture: ComponentFixture<BootcampdetailInstructorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampdetailInstructorpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampdetailInstructorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
