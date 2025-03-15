import { Component } from '@angular/core';

@Component({
  selector: 'app-example-test',
  template: ``,
})
export class ExampleTestComponent {
  public sum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
