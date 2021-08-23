import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDefaultDetectionComponent } from './child-default-detection.component';

describe('WithoutPushComponent', () => {
  let component: ChildDefaultDetectionComponent;
  let fixture: ComponentFixture<ChildDefaultDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDefaultDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDefaultDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
