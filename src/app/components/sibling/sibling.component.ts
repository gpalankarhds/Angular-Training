import { Component } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share/data-share.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss'],
})
export class SiblingComponent {
  data: any;

  constructor(private shareData: DataShareService) {
    this.shareData.data.subscribe((resp) => {
      this.data = resp;
    });
  }
}
