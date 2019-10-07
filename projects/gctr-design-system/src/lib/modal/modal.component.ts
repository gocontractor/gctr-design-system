import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, Event as NavigationEvent, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'gctr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() overlay = false;
  @Input() hideCloseButton = false;
  @Input() size: 'regular' | 'full' = 'regular';
  @Output() close = new EventEmitter();
  private routerSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.subscribeRouterEvents();
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private subscribeRouterEvents(): void {
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event: NavigationEvent) => event instanceof NavigationStart
        )
      )
      .subscribe((event: NavigationStart) => {
        const navTrigger = event.navigationTrigger;
        const targetTrigger = 'popstate';
        const isBrowserNavigation = navTrigger === targetTrigger; // Listen for browser back button press
        if (isBrowserNavigation) { this.router.navigate([this.router.url]); this.close.emit(); }
      });
  }

}
