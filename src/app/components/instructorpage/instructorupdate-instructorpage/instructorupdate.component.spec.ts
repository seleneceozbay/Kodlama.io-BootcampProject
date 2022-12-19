import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorupdateComponent } from './instructorupdate.component';

describe('InstructorupdateComponent', () => {
  let component: InstructorupdateComponent;
  let fixture: ComponentFixture<InstructorupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
