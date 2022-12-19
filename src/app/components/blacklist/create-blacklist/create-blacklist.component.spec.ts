import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlacklistComponent } from './create-blacklist.component';

describe('CreateBlacklistComponent', () => {
  let component: CreateBlacklistComponent;
  let fixture: ComponentFixture<CreateBlacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlacklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
