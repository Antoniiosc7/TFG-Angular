import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMascComponent } from './chart.component';

describe('ChartMascComponent', () => {
  let component: ChartMascComponent;
  let fixture: ComponentFixture<ChartMascComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartMascComponent]
    });
    fixture = TestBed.createComponent(ChartMascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
