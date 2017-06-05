import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', superpower: 'Good Vibes', city: '' },
  { id: 12, name: 'Narco', superpower: 'Drug Beam', city: '' },
  { id: 13, name: 'Bombasto', superpower: 'Sonic Boom', city: '' },
  { id: 14, name: 'Celeritas', superpower: 'Vegetable Growth', city: '' },
  { id: 15, name: 'Magneta', superpower: 'Color Beam', city: '' },
  { id: 16, name: 'RubberMan', superpower: 'Superhuman Stretch', city: '' },
  { id: 17, name: 'Dynama', superpower: 'Explosive Blast' },
  { id: 18, name: 'Dr IQ', superpower: 'Superhuman Intellect' },
  { id: 19, name: 'Magma', superpower: 'Lava Blast' },
  { id: 20, name: 'Tornado', superpower: 'Tornadoes' }
];



@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">  
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero1]='selectedHero' [team]='team' [teamLogo]='teamLogo'>> </hero-detail>
  `,
})

export class AppComponent  {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  team: String = "Magnificent 10"
  teamLogo: String = "https://s-media-cache-ak0.pinimg.com/originals/97/e6/bc/97e6bc2add6b52b80893c1dd5754f9ad.jpg"

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
