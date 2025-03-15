import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleTestComponent } from './example-test.component';

describe('ExampleTestComponent', () => {
  let component: ExampleTestComponent;
  let fixture: ComponentFixture<ExampleTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleTestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Initialize component
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should return the sum of two numbers', () => {
    const result = component.sum(3, 7);
    expect(result).toBe(10);
  });

  it('should return the correct sum with negative numbers', () => {
    const result = component.sum(-2, 5);
    expect(result).toBe(3);
  });

  it('should return the correct sum when adding zero', () => {
    expect(component.sum(5, 0)).toBe(5);
    expect(component.sum(0, 10)).toBe(10);
  });
});
