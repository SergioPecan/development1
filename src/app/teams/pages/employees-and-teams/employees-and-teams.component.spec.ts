import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAndTeamsComponent } from './employees-and-teams.component';

describe('EmployeesAndTeamsComponent', () => {
  let component: EmployeesAndTeamsComponent;
  let fixture: ComponentFixture<EmployeesAndTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesAndTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesAndTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
