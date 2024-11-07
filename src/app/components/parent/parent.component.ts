import { Component } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share/data-share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  data: string = '';
  showDataFromChild: any;

  constructor(private shareData: DataShareService) {}

  sendDataToChild() {
    this.data = 'Data sent from parent';
  }

  sendDataToParent(event: any) {
    this.showDataFromChild = event;
  }

  sendDataToSibling() {
    this.shareData.setData('Data sent to sibling from another component');
  }
}
