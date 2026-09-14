import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureStylistsDialogComponent } from './procedure-stylists-dialog.component';

describe('ProcedureStylistsDialogComponent', () => {
  let component: ProcedureStylistsDialogComponent;
  let fixture: ComponentFixture<ProcedureStylistsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureStylistsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureStylistsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
