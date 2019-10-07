import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { ClipboardService } from 'src/app/core/clipboard/clipboard.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input() title: string;
  @ViewChild('markdown') markdown: MarkdownComponent;

  constructor(private clipboard: ClipboardService) {}

  ngOnInit() {}

  copyToClipboard(): void {
    this.clipboard.copyToClipboard(this.markdown.element.nativeElement.innerText);
  }
}
