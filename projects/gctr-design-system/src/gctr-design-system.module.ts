import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * Core Lib Modules
 * Alphabetical order please
 */
import { GctrHeaderModule } from './lib/core-components/header/header.module';
import { GctrContentModule } from './lib/core-components/content/content.module';
import { GctrSidenavModule } from './lib/core-components/sidenav/sidenav.module';

/*
 * Components Lib Modules
 * Alphabetical order please
 */
import { GctrActionBarModule } from './lib/action-bar/action-bar.module';
import { GctrActionButtonModule  } from './lib/action-button/action-button.module';
import { GctrButtonModule } from './lib/button/button.module';
import { GctrCardModule } from './lib/card/card.module';
import { GctrDataTableModule } from './lib/data-table/data-table.module';
import { GctrLoadingCardModule } from './lib/loading-card/loading-card.module';
import { GctrIconModule } from './lib/icon/icon.module';
import { GctrModalModule } from './lib/modal/modal.module';
import { GctrPopoverModule } from './lib/popover/popover.module';
import { GctrProgressBarModule } from './lib/progress-bar/progress-bar.module';
import { GctrRatingModule } from './lib/rating/rating.module';
import { GctrSpinnerModule } from './lib/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    GctrHeaderModule,
    GctrSidenavModule,
    GctrContentModule,
    GctrActionBarModule,
    GctrActionButtonModule,
    GctrButtonModule,
    GctrCardModule,
    GctrDataTableModule,
    GctrIconModule,
    GctrLoadingCardModule,
    GctrModalModule,
    GctrPopoverModule,
    GctrProgressBarModule,
    GctrSpinnerModule,
    GctrRatingModule
  ],
  exports: [
    GctrHeaderModule,
    GctrSidenavModule,
    GctrContentModule,
    GctrActionBarModule,
    GctrActionButtonModule,
    GctrButtonModule,
    GctrCardModule,
    GctrDataTableModule,
    GctrIconModule,
    GctrLoadingCardModule,
    GctrModalModule,
    GctrPopoverModule,
    GctrProgressBarModule,
    GctrSpinnerModule,
    GctrRatingModule
  ]
})
export class GctrDesignSystemModule {}
