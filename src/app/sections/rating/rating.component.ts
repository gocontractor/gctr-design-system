import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  public componentName = 'RatingComponent';
  public module = 'GctrRatingModule';
  public rate: number;

  constructor() { }

  ngOnInit() { }

  getRate(rate: number) {
    this.rate = rate;
  }

}
