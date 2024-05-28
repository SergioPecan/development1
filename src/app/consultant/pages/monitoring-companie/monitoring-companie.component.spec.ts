import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringCompanieComponent } from './monitoring-companie.component';

describe('MonitoringCompanieComponent', () => {
  let component: MonitoringCompanieComponent;
  let fixture: ComponentFixture<MonitoringCompanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringCompanieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringCompanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
