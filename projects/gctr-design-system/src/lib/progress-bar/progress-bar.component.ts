import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gctr-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() isLoading = '';
  @Input() mode: 'indeterminate' | 'determinate' = 'indeterminate';
  /** Percentage Completed (0 - 100) */
  @Input() value: number = null;

  constructor() { }

  ngOnInit() { }

  get width() {
    if (this.value) {
      return this.value + '%';
    }
  }

}
