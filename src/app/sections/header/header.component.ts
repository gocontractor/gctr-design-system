import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public componentName = 'HeaderComponent';
    public module = 'GctrHeaderModule';
    public simulatedLoading = true;
    public slideChange(event: MatSlideToggleChange) {
        this.simulatedLoading = event.checked;
    }
}
