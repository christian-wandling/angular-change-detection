import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPushSubscriptionComponent } from './parent-push-subscription.component';

describe('ParentAsyncOnPushWithSubscriptionComponent', () => {
  let component: ParentPushSubscriptionComponent;
  let fixture: ComponentFixture<ParentPushSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPushSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPushSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
