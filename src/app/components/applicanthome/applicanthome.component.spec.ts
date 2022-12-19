import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicanthomeComponent } from './applicanthome.component';

describe('ApplicanthomeComponent', () => {
  let component: ApplicanthomeComponent;
  let fixture: ComponentFixture<ApplicanthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicanthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicanthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
