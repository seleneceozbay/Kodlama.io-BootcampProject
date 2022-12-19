import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBootcampComponent } from './get-bootcamp.component';

describe('GetBootcampComponent', () => {
  let component: GetBootcampComponent;
  let fixture: ComponentFixture<GetBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
