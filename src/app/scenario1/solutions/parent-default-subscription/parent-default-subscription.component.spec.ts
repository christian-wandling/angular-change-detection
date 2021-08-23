import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDefaultSubscriptionComponent } from './parent-default-subscription.component';

describe('ParentAsyncStateWithSubComponent', () => {
  let component: ParentDefaultSubscriptionComponent;
  let fixture: ComponentFixture<ParentDefaultSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDefaultSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDefaultSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
