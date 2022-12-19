import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApplicationComponent } from './get-application.component';

describe('GetApplicationComponent', () => {
  let component: GetApplicationComponent;
  let fixture: ComponentFixture<GetApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
