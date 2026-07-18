import { TestBed } from '@angular/core/testing';

import { MangaCart } from './manga-cart';

describe('MangaCart', () => {
  let service: MangaCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
