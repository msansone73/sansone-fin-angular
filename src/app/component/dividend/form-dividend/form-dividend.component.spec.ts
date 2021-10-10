import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDividendComponent } from './form-dividend.component';

describe('FormDividendComponent', () => {
  let component: FormDividendComponent;
  let fixture: ComponentFixture<FormDividendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDividendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDividendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
