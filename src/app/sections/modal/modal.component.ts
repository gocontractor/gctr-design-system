import { Component, OnInit, InjectionToken, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ExampleModalComponent } from './example-modal/example-modal.component';
import { CONTAINER_DATA, InjectionData } from './constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalDocumentationComponent implements OnInit {
  public componentName = 'ModalComponent';
  public module = 'GctrModalModule';
  public injectionData: InjectionData;

  constructor(private _overlay: Overlay, private _injector: Injector) { }

  ngOnInit() {
  }

  public handleButtonClick(): void {
    const overlayRef = this._overlay.create();
    this.injectionData = {
      closeModal: () => overlayRef.detach()
    };
    const userProfilePortal = new ComponentPortal(ExampleModalComponent, null, this.createInjector(this.injectionData));
    overlayRef.attach(userProfilePortal);
  }

  private createInjector(dataToPass): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(CONTAINER_DATA, dataToPass);
    return new PortalInjector(this._injector, injectorTokens);
  }

}
