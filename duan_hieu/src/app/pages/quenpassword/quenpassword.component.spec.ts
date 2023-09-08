import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuenpasswordComponent } from './quenpassword.component';

describe('QuenpasswordComponent', () => {
  let component: QuenpasswordComponent;
  let fixture: ComponentFixture<QuenpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuenpasswordComponent]
    });
    fixture = TestBed.createComponent(QuenpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
