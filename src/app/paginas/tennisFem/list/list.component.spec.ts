import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFemComponent } from './list.component';

describe('ListFemComponent', () => {
  let component: ListFemComponent;
  let fixture: ComponentFixture<ListFemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFemComponent]
    });
    fixture = TestBed.createComponent(ListFemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
