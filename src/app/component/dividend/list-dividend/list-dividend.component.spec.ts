import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDividendComponent } from './list-dividend.component';

describe('ListDividendComponent', () => {
  let component: ListDividendComponent;
  let fixture: ComponentFixture<ListDividendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDividendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDividendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
