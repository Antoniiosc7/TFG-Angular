import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchHubComponent } from './twitch-hub.component';

describe('TwitchHubComponent', () => {
  let component: TwitchHubComponent;
  let fixture: ComponentFixture<TwitchHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitchHubComponent]
    });
    fixture = TestBed.createComponent(TwitchHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
