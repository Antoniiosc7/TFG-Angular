import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierEditComponent } from './edit.component';

describe('PremierEditComponent', () => {
  let component: PremierEditComponent;
  let fixture: ComponentFixture<PremierEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremierEditComponent]
    });
    fixture = TestBed.createComponent(PremierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
