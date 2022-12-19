import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlacklistComponent } from './update-blacklist.component';

describe('UpdateBlacklistComponent', () => {
  let component: UpdateBlacklistComponent;
  let fixture: ComponentFixture<UpdateBlacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlacklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
