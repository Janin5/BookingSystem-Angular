import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStylistComponent } from './dialog-stylist.component';

describe('DialogStylistComponent', () => {
  let component: DialogStylistComponent;
  let fixture: ComponentFixture<DialogStylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogStylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
