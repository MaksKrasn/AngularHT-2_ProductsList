import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodformComponent } from './editprodform.component';

describe('EditprodformComponent', () => {
  let component: EditprodformComponent;
  let fixture: ComponentFixture<EditprodformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprodformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprodformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
