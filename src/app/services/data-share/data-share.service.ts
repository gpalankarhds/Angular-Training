import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  data: Subject<any> = new Subject();
  shareData = this.data.asObservable();

  constructor() {}

  setData(data: any) {
    this.data.next(data);
  }

  getData() {
    return this.data;
  }
}
