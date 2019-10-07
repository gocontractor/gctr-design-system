import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gctr-card',
  templateUrl: './gctr-card.component.html',
  styleUrls: ['./gctr-card.component.scss']
})
export class CardDocumentationComponent implements OnInit {
  public componentName = 'CardComponent';
  public module = 'GctrCardModule';

  constructor() { }

  ngOnInit() {
  }

}
