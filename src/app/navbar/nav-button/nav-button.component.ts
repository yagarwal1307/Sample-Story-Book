import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

  @Input() navItem;
  @Output() clickEvent = new EventEmitter<string>();

  logClickEvent() {
    this.clickEvent.emit(this.navItem.name + ' Navlink was clicked')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
