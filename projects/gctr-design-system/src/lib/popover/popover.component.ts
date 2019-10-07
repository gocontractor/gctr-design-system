import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gctr-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  @Input() triggerOn: 'click' | 'hover' = 'hover';
  @Input() icon: string;
  @Input() iconFont: string;
  @Input() label: string;
  @Input() text: string;
  @Input() hideLabelOnMobile: boolean = false;

  constructor() { }

  ngOnInit() { }

}
