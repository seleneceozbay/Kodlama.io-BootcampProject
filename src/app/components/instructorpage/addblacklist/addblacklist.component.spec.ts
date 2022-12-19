import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblacklistComponent } from './addblacklist.component';

describe('AddblacklistComponent', () => {
  let component: AddblacklistComponent;
  let fixture: ComponentFixture<AddblacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblacklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddblacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
