import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTable } from './inline-table';

describe('InlineTable', () => {
  let component: InlineTable;
  let fixture: ComponentFixture<InlineTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
