import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNoStoreComponent } from './parent-no-store.component';

describe('BasicComponent', () => {
  let component: ParentNoStoreComponent;
  let fixture: ComponentFixture<ParentNoStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNoStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNoStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
