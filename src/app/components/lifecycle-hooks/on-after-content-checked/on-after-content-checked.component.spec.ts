import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAfterContentCheckedComponent } from './on-after-content-checked.component';

describe('OnAfterContentCheckedComponent', () => {
  let component: OnAfterContentCheckedComponent;
  let fixture: ComponentFixture<OnAfterContentCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnAfterContentCheckedComponent]
    });
    fixture = TestBed.createComponent(OnAfterContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
