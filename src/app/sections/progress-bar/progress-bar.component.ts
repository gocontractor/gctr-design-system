import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  public componentName = 'ProgressBarComponent';
  public module = 'GctrProgressBarModule';
  public value = 40;

  constructor() { }

  ngOnInit() { }

}
