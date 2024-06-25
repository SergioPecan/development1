import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmingComponent } from './add-farming.component';

describe('AddFarmingComponent', () => {
  let component: AddFarmingComponent;
  let fixture: ComponentFixture<AddFarmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFarmingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
