import { TestBed } from '@angular/core/testing';

import { ApplicantLoginService } from './applicant-login.service';

describe('ApplicantLoginService', () => {
  let service: ApplicantLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
