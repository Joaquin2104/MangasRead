import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaMangas } from './manga-mangas';

describe('MangaMangas', () => {
  let component: MangaMangas;
  let fixture: ComponentFixture<MangaMangas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MangaMangas],
    }).compileComponents();

    fixture = TestBed.createComponent(MangaMangas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
