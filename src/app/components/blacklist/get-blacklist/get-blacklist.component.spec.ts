import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBlacklistComponent } from './get-blacklist.component';

describe('GetBlacklistComponent', () => {
  let component: GetBlacklistComponent;
  let fixture: ComponentFixture<GetBlacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBlacklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
