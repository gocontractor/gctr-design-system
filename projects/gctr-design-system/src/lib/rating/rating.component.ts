import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gctr-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  /** Total of stars for rating */
  @Input() total: number = 5;
  /** Rate value for display rating */
  @Input() rate: number;
  /** Element read only for display rating */
  @Input() readOnly: boolean = false;
  /** Callback when clickin on a rate star */
  @Output() callback = new EventEmitter<number>();

  public array: Array<Number> = [];

  constructor() { }

  ngOnInit() {
    this.array = this.generateArray();
  }

  private generateArray(): Array<Number> {
    const array = [];
    const total = this.total;
    for (let i = total; i >= 1; i--) { array.push(i); }
    return array;
  }

  chooseRating(rating: number) {
    if (this.readOnly) {
      return;
    }
    this.rate = rating;
    this.callback.emit(rating);
  }

}
