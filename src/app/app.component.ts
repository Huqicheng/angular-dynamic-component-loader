import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, OnDestroy} from '@angular/core';
import {AlertComponent} from './exe-alert/exe-alert.component';

@Component({
  selector: 'app-root',
  template: `
    <ng-template #alertContainer></ng-template>
    <button (click)="createComponent('success')">Create success alert</button>
    <button (click)="createComponent('danger')">Create danger alert</button>
  `
})
export class AppComponent {
  @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef: ComponentRef<AlertComponent>;
  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(type: string) {
    this.container.clear();
    const factory: ComponentFactory<AlertComponent> =
      this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
