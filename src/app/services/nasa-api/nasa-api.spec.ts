import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaApi } from './nasa-api';

describe('NasaApi', () => {
  let component: NasaApi;
  let fixture: ComponentFixture<NasaApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NasaApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasaApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
