import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierChart2Component } from './chart2.component';

describe('PremierChart2Component', () => {
  let component: PremierChart2Component;
  let fixture: ComponentFixture<PremierChart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremierChart2Component]
    });
    fixture = TestBed.createComponent(PremierChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
