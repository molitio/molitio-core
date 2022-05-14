import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoFoQaaComponent } from './mo-fo-qaa.component';

describe('MoFoQaaComponent', () => {
  let component: MoFoQaaComponent;
  let fixture: ComponentFixture<MoFoQaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoFoQaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoFoQaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
