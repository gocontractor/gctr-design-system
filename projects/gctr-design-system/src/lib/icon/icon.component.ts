import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gctr-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() icon = '';
  @Input() iconFont: 'gctr' | 'glyphicon' | 'font-awesome-brand'
    | 'font-awesome-solid' | 'material-icons' | 'material-outlined' = 'material-icons';
  @Input() size: 'smaller' | 'small' | 'medium' | 'big' = 'small';
  @Input() cssClass = '';
  @Input() tooltip = '';

  constructor() {
  }

  ngOnInit() { }

  get iconClasses() {
    let classes;
    switch (this.iconFont) {
      case 'font-awesome-brand': {
        classes = 'fab fa-' + this.icon;
        break;
      }
      case 'font-awesome-solid': {
        classes = 'fas fa-' + this.icon;
        break;
      }
      case 'glyphicon': {
        classes = 'glyphicon glyphicon-' + this.icon;
        break;
      }
      case 'gctr': {
        classes = 'gctr-icons ' + this.icon;
        break;
      }
      case 'material-outlined': {
        classes = 'material-icons-outlined ' + this.icon;
        break;
      }
      default: {
        classes = 'material-icons';
      }
    }
    return classes + ' ' + this.cssClass;
  }

  get showText() {
    let shouldShow: boolean;
    switch (this.iconFont) {
      case 'font-awesome-brand': {
        shouldShow = false;
        break;
      }
      case 'font-awesome-solid': {
        shouldShow = false;
        break;
      }
      case 'glyphicon': {
        shouldShow = true;
        break;
      }
      case 'gctr': {
        shouldShow = false;
        break;
      }
      case 'material-outlined': {
        shouldShow = false;
        break;
      }
      default: {
        shouldShow = true;
      }
    }
    return shouldShow;
  }
}
