import { TestBed, inject } from '@angular/core/testing';

import { TodostoreService } from './todostore.service';

describe('TodostoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodostoreService]
    });
  });

  it('should be created', inject([TodostoreService], (service: TodostoreService) => {
    expect(service).toBeTruthy();
  }));
});
