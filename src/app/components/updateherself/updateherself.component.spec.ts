import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateherselfComponent } from './updateherself.component';

describe('UpdateherselfComponent', () => {
  let component: UpdateherselfComponent;
  let fixture: ComponentFixture<UpdateherselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateherselfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateherselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
