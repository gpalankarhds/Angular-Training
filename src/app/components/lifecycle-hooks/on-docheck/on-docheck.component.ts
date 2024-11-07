import { ChangeDetectorRef, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-on-docheck',
  templateUrl: './on-docheck.component.html',
  styleUrls: ['./on-docheck.component.scss'],
})
export class OnDocheckComponent implements DoCheck {
  lifecycleTicks: number = 0;
  oldTheData: string;
  data: string[] = ['initial'];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection

    setTimeout(() => {
      console.log('changing data 1');
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      console.log('changing data 2');
      this.data.push('final');
      this.changeDetector.markForCheck();
    }, 6000);
  }

  ngDoCheck() {
    console.log(++this.lifecycleTicks);

    if (this.data[this.data.length - 1] !== this.oldTheData) {
      this.changeDetector.detectChanges();
    }
  }
}
