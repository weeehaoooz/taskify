import { ComponentType, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { inject, Injectable, Injector, signal } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private overlay = inject(Overlay);
  private injector = inject(Injector);

  private overlayRef!: OverlayRef;

  modalClose = signal<IModalCloseState>({ action: '' });
  constructor() {}

  openModal(modalComponent: ComponentType<any>, modalProviders: any[]) {
    if(this.overlayRef) {
      this.closeModal();
    }
    
    this.modalClose.set({ action: '' });

    const config: OverlayConfig = {
      hasBackdrop: false,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    }
    
    this.overlayRef = this.overlay.create(config);

    const injectorData = {
      providers: [...(modalProviders ?? [])],
      parent: this.injector
    }
    const injector = Injector.create(injectorData);

    const portal = new ComponentPortal(modalComponent, null, injector);
    this.overlayRef.attach(portal);
  }

  closeModal(state?: any) {
    if(this.overlayRef) {
      this.overlayRef.detach();
      this.modalClose.set({...state});
    }
  }

  resetState() {
    this.modalClose.set({ action: '' });
  }
}

export interface IModalCloseState {
  action: string;
}

@Injectable()
export class ModalDataService {
  data: any;
}
