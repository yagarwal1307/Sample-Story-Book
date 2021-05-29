import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$!: Observable<Hero>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HeroService
  ) { }

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getHero(params.get('id')!);
      })
    )
  }

  gotoHeroes(hero: Hero) {
    this.router.navigate(['heroes', {id: hero.id, foo:'foo'}])
  }
}
