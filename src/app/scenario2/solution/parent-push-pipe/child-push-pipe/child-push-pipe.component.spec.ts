import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPushPipeComponent } from './child-push-pipe.component';

describe('ChildPushPipeComponent', () => {
  let component: ChildPushPipeComponent;
  let fixture: ComponentFixture<ChildPushPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPushPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPushPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
