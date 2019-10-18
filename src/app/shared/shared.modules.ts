import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import {
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
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
    MatTooltipModule,
    MatDividerModule
} from '@angular/material';
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
