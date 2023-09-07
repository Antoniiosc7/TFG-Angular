import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierChart1Component } from './chart1.component';

describe('PremierChart1Component', () => {
  let component: PremierChart1Component;
  let fixture: ComponentFixture<PremierChart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremierChart1Component]
    });
    fixture = TestBed.createComponent(PremierChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
