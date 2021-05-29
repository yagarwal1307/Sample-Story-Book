import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { MessageService } from '../message.service'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { };

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('Hero Service: fetched heroes');
    return heroes;
  }

  getHero(id: number| string) {
    return this.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
    )
  }
}
