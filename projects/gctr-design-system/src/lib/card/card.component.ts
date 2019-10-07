import { Component, Input } from '@angular/core';

@Component({
  selector: 'gctr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cssClass: string = '';

  constructor() { }

}
