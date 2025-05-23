import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevechicleComponent } from './createvechicle.component';

describe('CreatevechicleComponent', () => {
  let component: CreatevechicleComponent;
  let fixture: ComponentFixture<CreatevechicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevechicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatevechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
