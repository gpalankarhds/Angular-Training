import { Component, Directive, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-destroy',
  templateUrl: './on-destroy.component.html',
  styleUrls: ['./on-destroy.component.scss'],
})
export class OnDestroyComponent {
  destroy: boolean = true;

  toggleDestroy() {
    this.destroy = !this.destroy;
  }
}

@Directive({
  selector: '[appDestroyListener]',
})
export class DestroyListenerDirective implements OnDestroy {
  ngOnDestroy() {
    alert('Goodbye World!');
  }
}
