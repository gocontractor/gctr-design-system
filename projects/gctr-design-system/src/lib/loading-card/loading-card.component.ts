import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gctr-loading-card',
  templateUrl: './loading-card.component.html',
  styleUrls: ['./loading-card.component.scss']
})
export class LoadingCardComponent implements OnInit {
  @Input() cssClass = '';
  @Input() internalClass = '';
  @Input() size: 'small' | 'std' | 'medium' | 'big' | 'full' = 'std';
  @Input() isLoading: boolean = false;
  @Input() mode: 'indeterminate' | 'determinate' = 'indeterminate';
  @Input() value: number = null;

  constructor() { }

  ngOnInit() { }

  get classes() {
    return this.cssClass + ' ' + this.size;
  }

}
