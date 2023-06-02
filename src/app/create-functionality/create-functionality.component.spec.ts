import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFunctionalityComponent } from './create-functionality.component';

describe('CreateFunctionalityComponent', () => {
  let component: CreateFunctionalityComponent;
  let fixture: ComponentFixture<CreateFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFunctionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
