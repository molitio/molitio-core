import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoFoAddressComponent } from './mo-fo-adress.component';

describe('MoFormComponent', () => {
  let component: MoFoAddressComponent;
  let fixture: ComponentFixture<MoFoAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoFoAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoFoAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
