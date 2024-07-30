import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStrategyComponent } from './dashboard.strategy.component';

describe('DashboardStrategyComponent', () => {
  let component: DashboardStrategyComponent;
  let fixture: ComponentFixture<DashboardStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStrategyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
