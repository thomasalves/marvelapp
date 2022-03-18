import { TestBed } from '@angular/core/testing';

import { HeroisService } from './herois.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('HeroisService', () => {
  let service: HeroisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(HeroisService);
  });

  it('should be created', () => {
    console.log(service)
    expect(service).toBeTruthy();
  });
});
