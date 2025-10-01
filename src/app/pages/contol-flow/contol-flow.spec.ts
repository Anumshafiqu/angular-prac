import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContolFlow } from './contol-flow';

describe('ContolFlow', () => {
  let component: ContolFlow;
  let fixture: ComponentFixture<ContolFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContolFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContolFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
