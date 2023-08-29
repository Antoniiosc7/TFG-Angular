import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubMascComponent } from './hub.component';

describe('HubMascComponent', () => {
  let component: HubMascComponent;
  let fixture: ComponentFixture<HubMascComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HubMascComponent]
    });
    fixture = TestBed.createComponent(HubMascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
