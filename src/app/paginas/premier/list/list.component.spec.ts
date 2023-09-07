import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierListComponent } from './list.component';

describe('PremierListComponent', () => {
  let component: PremierListComponent;
  let fixture: ComponentFixture<PremierListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremierListComponent]
    });
    fixture = TestBed.createComponent(PremierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
