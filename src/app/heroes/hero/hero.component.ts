import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age: number = 18;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {

    if(this.name == 'Superman'){
      this.name = 'Spiderman';
    }
    else{
      this.name = 'Superman';
    }

  }

  changeAge(): void {
    this.age = 23;
  }

  reset(): void {
    this.name = 'Spiderman';
    this.age = 18;
  }
}
