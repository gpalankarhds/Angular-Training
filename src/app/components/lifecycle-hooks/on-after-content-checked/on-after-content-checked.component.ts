import {
  AfterContentChecked,
  Component,
  ContentChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-on-after-content-checked',
  templateUrl: './on-after-content-checked.component.html',
  styleUrls: ['./on-after-content-checked.component.scss'],
})
export class OnAfterContentCheckedComponent {}

@Component({
  selector: 'app-c-content-checked',
  template: `
    <p>I am C.</p>
    <p>Hello World!</p>
  `,
})
export class CContentCheckedComponent {}

@Component({
  selector: 'app-b-content-checked',
  template: `
    <p>I am B.</p>
    <button (click)="($event)">CLICK</button>
    <ng-content></ng-content>
  `,
})
export class BContentCheckedComponent implements AfterContentChecked {
  @ContentChild('BHeader', { read: ElementRef }) hRef: ElementRef;
  @ContentChild(CContentCheckedComponent, { read: ElementRef })
  cRef: ElementRef;

  constructor(private renderer: Renderer2) {}

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterContentChecked() {
    this.renderer.setStyle(
      this.hRef.nativeElement,
      'background-color',
      this.randomRGB()
    );
    this.renderer.setStyle(
      this.cRef.nativeElement.children.item(0),
      'background-color',
      this.randomRGB()
    );
    this.renderer.setStyle(
      this.cRef.nativeElement.children.item(1),
      'background-color',
      this.randomRGB()
    );
  }
}
