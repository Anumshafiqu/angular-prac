import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAttr } from './directive-attr';

describe('DirectiveAttr', () => {
  let component: DirectiveAttr;
  let fixture: ComponentFixture<DirectiveAttr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveAttr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveAttr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
