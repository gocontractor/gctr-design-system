import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gctr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() cssClass = '';
  @Input() isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }

  get classes() {
    let classes = '';
    if (this.cssClass) {
      classes += ' ' + this.cssClass;
    }
    return classes;
  }

}
