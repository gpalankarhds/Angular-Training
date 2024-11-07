import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAfterViewCheckedComponent } from './on-after-view-checked.component';

describe('OnAfterViewCheckedComponent', () => {
  let component: OnAfterViewCheckedComponent;
  let fixture: ComponentFixture<OnAfterViewCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnAfterViewCheckedComponent]
    });
    fixture = TestBed.createComponent(OnAfterViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
