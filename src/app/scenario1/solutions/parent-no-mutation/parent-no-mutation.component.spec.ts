import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNoMutationComponent } from './parent-no-mutation.component';

describe('ParentNoMutationComponent', () => {
  let component: ParentNoMutationComponent;
  let fixture: ComponentFixture<ParentNoMutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNoMutationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNoMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
