import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingInformationComponent } from './farming-information.component';

describe('FarmingInformationComponent', () => {
  let component: FarmingInformationComponent;
  let fixture: ComponentFixture<FarmingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmingInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
