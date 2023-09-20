import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Superman', 'Capitan America'];
  public lastDeleteHero: string | undefined = '';

  deleteHero(): void {
    this.lastDeleteHero = this.heroes.pop();
  }

  reset(): void {
    this.heroes = ['Spiderman', 'Superman', 'Capitan America'];
    this.lastDeleteHero = '';
  }
}
