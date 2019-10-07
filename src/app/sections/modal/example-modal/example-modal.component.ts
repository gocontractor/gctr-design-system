import { Component, OnInit, Inject } from '@angular/core';
import { CONTAINER_DATA, InjectionData } from '../constants';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.scss']
})
export class ExampleModalComponent implements OnInit {

  constructor(@Inject(CONTAINER_DATA) public data: InjectionData) { }

  ngOnInit() {
  }

  public closeModal(): void {
    this.data.closeModal();
  }

}
