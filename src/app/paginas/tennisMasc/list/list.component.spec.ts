import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMascComponent } from './list.component';

describe('ListMascComponent', () => {
  let component: ListMascComponent;
  let fixture: ComponentFixture<ListMascComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMascComponent]
    });
    fixture = TestBed.createComponent(ListMascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
