import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFemComponent } from './chart.component';

describe('ChartFemComponent', () => {
  let component: ChartFemComponent;
  let fixture: ComponentFixture<ChartFemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartFemComponent]
    });
    fixture = TestBed.createComponent(ChartFemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
