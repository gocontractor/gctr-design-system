import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-loading-card',
  templateUrl: './loading-card.component.html',
  styleUrls: ['./loading-card.component.scss']
})
export class LoadingCardDocumentationComponent implements OnInit {
  public componentName = 'LoadingCardComponent';
  public module = 'GctrLoadingCardModule';
  public simulatedLoading: boolean;
  public simulatedDeterminateLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

  public slideChange(event: MatSlideToggleChange) {
    this.simulatedLoading = event.checked;
  }

  public slideDeterminateChange(event: MatSlideToggleChange) {
    this.simulatedDeterminateLoading = event.checked;
  }

}
