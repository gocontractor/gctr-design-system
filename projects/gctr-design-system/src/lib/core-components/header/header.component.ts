import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gctr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }

}
