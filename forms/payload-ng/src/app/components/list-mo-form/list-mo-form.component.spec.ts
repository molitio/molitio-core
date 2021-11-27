import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoFormComponent } from './list-mo-form.component';

describe('ListMoFormComponent', () => {
  let component: ListMoFormComponent;
  let fixture: ComponentFixture<ListMoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
