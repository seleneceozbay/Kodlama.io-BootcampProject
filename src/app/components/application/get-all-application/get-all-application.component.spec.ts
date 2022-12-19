import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllApplicationComponent } from './get-all-application.component';

describe('GetAllApplicationComponent', () => {
  let component: GetAllApplicationComponent;
  let fixture: ComponentFixture<GetAllApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
