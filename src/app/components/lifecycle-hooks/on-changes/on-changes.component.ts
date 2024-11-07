import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss'],
})
export class OnChangesComponent {
  arbitraryData: string = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
}

@Component({
  selector: 'app-child-changes',
  template: `
    <h3>Child Component</h3>
    <p>TICKS: {{ lifecycleTicks }}</p>
    <p>DATA: {{ data }}</p>
  `,
})
export class ChildComponentChanges implements OnChanges {
  @Input() data: string;
  lifecycleTicks: number = 0;

  ngOnChanges() {
    //console.log('changes');
    this.lifecycleTicks++;
  }
}
