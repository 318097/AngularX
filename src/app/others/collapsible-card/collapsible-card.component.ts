import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-card',
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.scss']
})
export class CollapsibleCardComponent implements OnInit {
  visible = true;
  constructor() { }

  ngOnInit() {
  }

  toggleCard() {
    this.visible = !this.visible;
  }
}
