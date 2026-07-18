import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaAbout } from './manga-about';

describe('MangaAbout', () => {
  let component: MangaAbout;
  let fixture: ComponentFixture<MangaAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MangaAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(MangaAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
