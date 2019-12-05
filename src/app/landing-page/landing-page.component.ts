import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit() {
  }

}
