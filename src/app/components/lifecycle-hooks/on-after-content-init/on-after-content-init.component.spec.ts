import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAfterContentInitComponent } from './on-after-content-init.component';

describe('OnAfterContentInitComponent', () => {
  let component: OnAfterContentInitComponent;
  let fixture: ComponentFixture<OnAfterContentInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnAfterContentInitComponent]
    });
    fixture = TestBed.createComponent(OnAfterContentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
