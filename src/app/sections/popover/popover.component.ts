import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  public componentName = 'PopoverComponent';
  public module = 'GctrPopoverModule';

  constructor() { }

  ngOnInit() { }

}
