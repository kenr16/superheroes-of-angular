import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf='hero1'>
      <h2>{{hero1.name}} details!</h2>
      <div><label>id: </label>{{hero1.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero1.name" placeholder="name">
        <p>Superpower: {{hero1.superpower}}</p>
        <p>Team Affiliation: {{team}}</p>
        <img src={{teamLogo}}>
      </div>
    </div>
  `,
})

export class HeroDetailComponent {
  @Input() hero1: Hero;
  @Input() team: String;
  @Input() teamLogo: String;
}
