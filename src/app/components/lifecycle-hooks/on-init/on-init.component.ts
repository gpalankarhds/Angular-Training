import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.scss'],
})
export class OnInitComponent {
  arbitraryData: string = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
}

@Component({
  selector: 'app-child-init',
  template: `
    <h3>Child Component</h3>
    <p>TICKS: {{ lifecycleTicks }}</p>
    <p>DATA: {{ data }}</p>
  `,
})
export class ChildComponentInit implements OnInit {
  @Input() data: string;
  lifecycleTicks: number = 0;

  ngOnInit() {
    //console.log('Init');
    this.lifecycleTicks++;
  }
}
