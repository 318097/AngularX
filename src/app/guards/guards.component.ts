import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.scss']
})
export class GuardsComponent implements OnInit {
  // can access this property in the canDeactivate guard.s
  isDirty = false;
  constructor() { }

  ngOnInit() {
  }

}
