import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoFoMessageComponent } from './mo-fo-message.component';

describe('MoFormComponent', () => {
  let component: MoFoMessageComponent;
  let fixture: ComponentFixture<MoFoMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoFoMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoFoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
