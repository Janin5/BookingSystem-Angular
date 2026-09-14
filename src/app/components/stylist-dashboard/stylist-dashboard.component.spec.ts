import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistDashboardComponent } from './stylist-dashboard.component';

describe('StylistDashboardComponent', () => {
  let component: StylistDashboardComponent;
  let fixture: ComponentFixture<StylistDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylistDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
