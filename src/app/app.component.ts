import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentationService } from './core/documentation/documentation.service';
import { ContentComponent } from './layout';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GctrDesignSystem';
  @ViewChild('content') content: ContentComponent;
  constructor(private startup: DocumentationService, private router: Router) {}
  ngOnInit() {
    // If there is no startup data received (maybe an error!)
    // navigate to error route
    if (!this.startup.startupData) {
      console.error('no startupdata');
    }
    // This is for the sidenav content - to scroll to top when navigation occurs
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      const scrollToTop = window.setInterval(function () {
          const pos = window.pageYOffset;
          if (pos > 0) {
              window.scrollTo(0, pos - 20); // how far to scroll on each step
          } else {
              window.clearInterval(scrollToTop);
          }
      }, 4); // how fast to scroll (this equals roughly 60 fps)
  });
  }

  toggleNav() {
    this.content.drawer.toggle();
  }
}
