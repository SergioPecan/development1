import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringCompaniComponent } from './monitoring-compani.component';

describe('MonitoringCompaniComponent', () => {
  let component: MonitoringCompaniComponent;
  let fixture: ComponentFixture<MonitoringCompaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringCompaniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringCompaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
