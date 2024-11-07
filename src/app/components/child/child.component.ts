import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() dataToChild: string | undefined;
  @Output() sendDataFromChild: EventEmitter<any> = new EventEmitter();

  sendDataToParent() {
    this.sendDataFromChild.emit('Recieved data from child');
  }
}
