import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
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
    GctrProgressBarModule,
    GctrSpinnerModule,
    GctrRatingModule,
    GctrPopoverModule
} from 'projects/gctr-design-system/src/public_api';

@NgModule({
    declarations: [
        CodeComponent,
        DocumentationComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTableModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: false,
                    smartLists: true,
                    smartypants: false
                }
            }
        }),
        // Design System
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
        GctrProgressBarModule,
        GctrRatingModule,
        GctrSpinnerModule,
        GctrPopoverModule
    ],
    exports: [
        CodeComponent, DocumentationComponent,
        CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTableModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule,
        // Design System
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
        GctrProgressBarModule,
        GctrRatingModule,
        GctrSpinnerModule,
        GctrPopoverModule
    ]
})
export class SharedModule { }
