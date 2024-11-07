import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDocheckComponent } from './on-docheck.component';

describe('OnDocheckComponent', () => {
  let component: OnDocheckComponent;
  let fixture: ComponentFixture<OnDocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnDocheckComponent]
    });
    fixture = TestBed.createComponent(OnDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
