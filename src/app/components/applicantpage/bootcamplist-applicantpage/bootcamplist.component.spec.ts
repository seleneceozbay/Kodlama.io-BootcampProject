import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcamplistComponent } from './bootcamplist.component';

describe('BootcamplistComponent', () => {
  let component: BootcamplistComponent;
  let fixture: ComponentFixture<BootcamplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcamplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcamplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
