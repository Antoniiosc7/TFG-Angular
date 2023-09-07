import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisListComponent } from './list.component';

describe('TennisListComponent', () => {
  let component: TennisListComponent;
  let fixture: ComponentFixture<TennisListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TennisListComponent]
    });
    fixture = TestBed.createComponent(TennisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
