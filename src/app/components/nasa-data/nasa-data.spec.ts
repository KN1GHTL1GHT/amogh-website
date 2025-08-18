import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaData } from './nasa-data';

describe('NasaData', () => {
  let component: NasaData;
  let fixture: ComponentFixture<NasaData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NasaData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasaData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
