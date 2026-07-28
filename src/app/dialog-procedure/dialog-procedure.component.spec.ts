import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProcedureComponent } from './dialog-procedure.component';

describe('DialogProcedureComponent', () => {
  let component: DialogProcedureComponent;
  let fixture: ComponentFixture<DialogProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProcedureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
