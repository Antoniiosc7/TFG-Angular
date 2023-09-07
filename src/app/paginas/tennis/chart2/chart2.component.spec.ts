import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisChart2Component } from './chart2.component';

describe('TennisChart2Component', () => {
  let component: TennisChart2Component;
  let fixture: ComponentFixture<TennisChart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TennisChart2Component]
    });
    fixture = TestBed.createComponent(TennisChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
