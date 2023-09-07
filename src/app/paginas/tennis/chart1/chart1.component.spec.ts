import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisChart1Component } from './chart1.component';

describe('TennisChart1Component', () => {
  let component: TennisChart1Component;
  let fixture: ComponentFixture<TennisChart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TennisChart1Component]
    });
    fixture = TestBed.createComponent(TennisChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
