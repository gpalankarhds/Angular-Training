import {
  AfterViewChecked,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-on-after-view-checked',
  templateUrl: './on-after-view-checked.component.html',
  styleUrls: ['./on-after-view-checked.component.scss'],
})
export class OnAfterViewCheckedComponent {}

@Component({
  selector: 'app-c-view-checked',
  template: `
    <p>I am C.</p>
    <p>Hello World!</p>
  `,
})
export class CViewCheckedComponent {}

@Component({
  selector: 'app-b-view-checked',
  template: `
    <p #BStatement>I am B.</p>
    <button (click)="($event)">CLICK</button>
    <ng-content></ng-content>
  `,
})
export class BViewCheckedComponent implements AfterViewChecked {
  @ViewChild('BStatement', { read: ElementRef }) pStmt: ElementRef;

  constructor(private renderer: Renderer2) {}

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterViewChecked() {
    this.renderer.setStyle(
      this.pStmt.nativeElement,
      'background-color',
      this.randomRGB()
    );
  }
}
