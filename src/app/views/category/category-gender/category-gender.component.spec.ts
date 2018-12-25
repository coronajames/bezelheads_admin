import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGenderComponent } from './category-gender.component';

describe('InvoiceListComponent', () => {
  let component: CategoryGenderComponent;
  let fixture: ComponentFixture<CategoryGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
