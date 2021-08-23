import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPushPipeComponent } from './parent-push-pipe.component';

describe('ParentAsyncWithPipeComponent', () => {
  let component: ParentPushPipeComponent;
  let fixture: ComponentFixture<ParentPushPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPushPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPushPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
