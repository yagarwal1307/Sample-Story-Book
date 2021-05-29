import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list-individual',
  templateUrl: './hero-list-individual.component.html',
  styleUrls: ['./hero-list-individual.component.css']
})
export class HeroListIndividualComponent implements OnInit {

  @Input() selectedId;
  @Input() hero;

  constructor() { }

  ngOnInit(): void {
  }
}
