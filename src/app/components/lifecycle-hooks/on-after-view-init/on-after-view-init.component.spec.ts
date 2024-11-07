import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAfterViewInitComponent } from './on-after-view-init.component';

describe('OnAfterViewInitComponent', () => {
  let component: OnAfterViewInitComponent;
  let fixture: ComponentFixture<OnAfterViewInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnAfterViewInitComponent]
    });
    fixture = TestBed.createComponent(OnAfterViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
