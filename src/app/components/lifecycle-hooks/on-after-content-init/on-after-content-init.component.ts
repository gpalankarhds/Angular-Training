import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-on-after-content-init',
  templateUrl: './on-after-content-init.component.html',
  styleUrls: ['./on-after-content-init.component.scss'],
})
export class OnAfterContentInitComponent {}

@Component({
  selector: 'app-c-content-init',
  template: `
    <p>I am C.</p>
    <p>Hello World!</p>
  `,
})
export class CContnetInitComponent {}

@Component({
  selector: 'app-b-content-init',
  template: `
    <p>I am B.</p>
    <ng-content></ng-content>
  `,
})
export class BContnetInitComponent implements AfterContentInit {
  @ContentChild('BHeader', { read: ElementRef }) hRef: ElementRef;
  @ContentChild(CContnetInitComponent, { read: ElementRef }) cRef: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    this.renderer.setStyle(
      this.hRef.nativeElement,
      'background-color',
      'yellow'
    );

    this.renderer.setStyle(
      this.cRef.nativeElement.children.item(0),
      'background-color',
      'pink'
    );
    this.renderer.setStyle(
      this.cRef.nativeElement.children.item(1),
      'background-color',
      'red'
    );
  }
}
