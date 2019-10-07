import { Component } from '@angular/core';
import { ClipboardService } from 'src/app/core/clipboard/clipboard.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
  public title = 'icon.html';
  public componentName = 'IconComponent';
  public module = 'GctrIconModule';
  public showCode = false;

  constructor(private clipboard: ClipboardService) {}

  copyToClipboard(item: string): void {
    this.clipboard.copyToClipboard(item);
  }
}
