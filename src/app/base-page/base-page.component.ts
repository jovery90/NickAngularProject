import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-page',
  template: `
  <top-navbar></top-navbar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  calculator() {
    return 1;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
