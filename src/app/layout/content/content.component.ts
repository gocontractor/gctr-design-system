import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  smallScreen: boolean;

  @ViewChild('drawer') drawer: MatDrawer;

  breakpointsSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointsSubscription = this.breakpointObserver
      .observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.TabletPortrait
      ])
      .subscribe(result => {
        this.smallScreen = result.matches;
        if (this.smallScreen) {
          this.drawer.close();
        } else {
          this.drawer.open();
        }
      });
  }

  ngOnDestroy(): void {
    this.breakpointsSubscription.unsubscribe();
  }
}
