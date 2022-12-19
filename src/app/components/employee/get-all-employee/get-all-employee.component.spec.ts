import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEmployeeComponent } from './get-all-employee.component';

describe('GetAllEmployeeComponent', () => {
  let component: GetAllEmployeeComponent;
  let fixture: ComponentFixture<GetAllEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
