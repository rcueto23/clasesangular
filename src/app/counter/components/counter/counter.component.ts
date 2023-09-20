import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent  {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 0;

  increaseBy( value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 0;
  }
}
