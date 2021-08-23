import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPushSubscriptionComponent } from './child-push-subscription.component';

describe('ChildPushSubscriptionComponent', () => {
  let component: ChildPushSubscriptionComponent;
  let fixture: ComponentFixture<ChildPushSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPushSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPushSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
