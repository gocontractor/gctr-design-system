import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gctr-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() cssClass: string;

  constructor() { }

  ngOnInit() { }

}
