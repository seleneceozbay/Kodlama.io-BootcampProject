import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorlistComponent } from './instructorlist.component';

describe('InstructorlistComponent', () => {
  let component: InstructorlistComponent;
  let fixture: ComponentFixture<InstructorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
