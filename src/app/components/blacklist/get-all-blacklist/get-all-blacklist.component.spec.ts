import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBlacklistComponent } from './get-all-blacklist.component';

describe('GetAllBlacklistComponent', () => {
  let component: GetAllBlacklistComponent;
  let fixture: ComponentFixture<GetAllBlacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBlacklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
