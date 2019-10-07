import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'gctr-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  /** Design of the button */
  @Input() design: 'main' | 'stroke' | 'basic' | 'white' | 'float' | 'float-cancel' = 'basic';
  /** Color palette of the button */
  @Input() color: 'primary' | 'secondary';
  /** Text label for the button  */
  @Input() label: string;
  /** Type attribute of the button */
  @Input() type: 'submit' | 'reset' | 'button' = 'submit';
  /** Icon name of icon to appear */
  @Input() icon: string;
  /** Icon library to whivh the icon belongs */
  @Input() iconFont: 'gctr' | 'glyphicon' |
    'font-awesome-brand' | 'font-awesome-solid' |
    'material-icons' | 'material-outlined' = 'material-icons';
  /** Additional css classes to apply to the button */
  @Input() cssClass: string = '';
  /** Text for the button's tooltip */
  @Input() tooltip: string = '';
  /** Disable state of the button */
  @Input() disabled = false;
  /** Hide label on mobile screens  */
  @Input() hideLabelOnMobile: boolean = false;
  /** Method called when button is clicked */
  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  get classes() {
    let classes = this.design;
    if (this.design !== 'white' && this.color) {
      classes += ' ' + this.color;
    }
    if (this.hideLabelOnMobile) {
      classes += ' hide-label-on-mobile';
    }
    if (this.cssClass) {
      classes += ' ' + this.cssClass;
    }
    return classes;
  }
}
