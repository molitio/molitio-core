import { TestBed } from '@angular/core/testing';

import { MoFormService } from './mo-form.service';

describe('MoFormService', () => {
  let service: MoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
