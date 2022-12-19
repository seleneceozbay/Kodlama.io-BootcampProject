import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBootcampComponent } from './get-all-bootcamp.component';

describe('GetAllBootcampComponent', () => {
  let component: GetAllBootcampComponent;
  let fixture: ComponentFixture<GetAllBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
