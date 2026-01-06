import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlogDetail } from './devlog-detail';

describe('DevlogDetail', () => {
  let component: DevlogDetail;
  let fixture: ComponentFixture<DevlogDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevlogDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevlogDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
