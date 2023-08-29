import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubFemComponent } from './hub.component';

describe('HubFemComponent', () => {
  let component: HubFemComponent;
  let fixture: ComponentFixture<HubFemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HubFemComponent]
    });
    fixture = TestBed.createComponent(HubFemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
