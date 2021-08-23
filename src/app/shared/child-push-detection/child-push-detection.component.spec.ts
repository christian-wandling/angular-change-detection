import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPushDetectionComponent } from './child-push-detection.component';

describe('WithPushComponent', () => {
  let component: ChildPushDetectionComponent;
  let fixture: ComponentFixture<ChildPushDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPushDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPushDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
