import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navLinks = [
    {link: '/crisis-center', name: 'Crisis Center'},
    {link: '/heroes', name: 'Heroes'},
  ]

  constructor() { }

  logger(log: string) {
    console.log(log)
  }

  ngOnInit(): void {
  }

}
