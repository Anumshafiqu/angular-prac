import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resourceapi } from './resourceapi';

describe('Resourceapi', () => {
  let component: Resourceapi;
  let fixture: ComponentFixture<Resourceapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resourceapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resourceapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
