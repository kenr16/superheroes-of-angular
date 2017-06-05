import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf='hero1' [class.portland]="hero1.city === 'Portland'" [class.seattle]="hero1.city === 'Seattle'" [class.newYork]="hero1.city === 'New York'" [class.sanFrancisco]="hero1.city === 'San Francisco'">
      <h2>{{hero1.name}} details!</h2>
      <div><label>id: </label>{{hero1.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero1.name" placeholder="name">
        <p>Superpower: {{hero1.superpower}}</p>
        <p>Team Affiliation: {{team}}</p>
        <p>City: {{hero1.city}}</p>
        <form>
          <select name="city" ng-model="selectedCity">
            <option value="Portland">Portland</option>
            <option value="Seattle">Seattle</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
          </select>
          <button (click)="selectCity(hero1, 'Portland')">Select Portland</button>
          <button (click)="selectCity(hero1, 'Seattle')">Select Seattle</button>
          <button (click)="selectCity(hero1, 'New York')">Select New York</button>
          <button (click)="selectCity(hero1, 'San Francisco')">Select San Francisco</button>
          </form>
        <img src={{teamLogo}}>
      </div>
    </div>
  `,
})

export class HeroDetailComponent {
  @Input() hero1: Hero;
  @Input() team: String;
  @Input() teamLogo: String;

  selectCity(hero: Hero, city: String): void {
    console.log(hero);
    console.log(city);
    hero.city = city;
  }

}
