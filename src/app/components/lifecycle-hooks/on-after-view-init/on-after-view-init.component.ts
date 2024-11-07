import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-on-after-view-init',
  templateUrl: './on-after-view-init.component.html',
  styleUrls: ['./on-after-view-init.component.scss'],
})
export class OnAfterViewInitComponent {}

@Component({
  selector: 'app-c-view-init',
  template: `
    <p>I am C.</p>
    <p>Hello World!</p>
  `,
})
export class CViewInitComponent {}

@Component({
  selector: 'app-b-view-init',
  template: `
    <p #BStatement>I am B.</p>
    <ng-content></ng-content>
  `,
})
export class BViewInitComponent implements AfterViewInit {
  @ViewChild('BStatement', { read: ElementRef }) pStmt: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.pStmt.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
