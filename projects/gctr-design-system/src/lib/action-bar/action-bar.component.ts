import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gctr-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() cssClass = '';
  @Input() content = '';
  @Input() isLoading = '';

  constructor() { }

  ngOnInit() {
  }

  get cssClasses() {
    let _cssClasses = this.cssClass;
    if (this.content === 'end') {
      _cssClasses = _cssClasses +  ' justify-content-end';
    }
    return _cssClasses;
  }

}
