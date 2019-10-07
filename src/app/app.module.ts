import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  GridComponent,
  ColorsComponent,
  TypographyComponent,
  ButtonsComponent,
  ActionsComponent,
  IconsComponent,
  StructureComponent,
  CssComponent,
  DataTableComponent,
  CardDocumentationComponent,
  RatingComponent,
  ProgressBarComponent,
  PopoverComponent
} from './sections';
import { DocumentationService } from './core';
import { HeaderComponent as HeaderDemoComponent } from './sections/header/header.component';
import { HeaderComponent, FooterComponent, ContentComponent } from './layout';
import { SharedModule } from './shared/shared.modules';

export function startupServiceFactory(startupService: DocumentationService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ColorsComponent,
    TypographyComponent,
    DataTableComponent,
    ButtonsComponent,
    ActionsComponent,
    IconsComponent,
    CssComponent,
    HeaderDemoComponent,
    HeaderComponent,
    FooterComponent,
    StructureComponent,
    ContentComponent,
    CardDocumentationComponent,
    RatingComponent,
    ProgressBarComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DocumentationService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [DocumentationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
