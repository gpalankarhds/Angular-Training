import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
})
export class TextTransformPipe implements PipeTransform {
  transform(value: any, ...args: string[]): string {
    console.log(value);
    switch (value) {
      case 'soap':
        value = 'Soap';
        break;
      case 'detergent':
        value = 'Detergent';
        break;
      case 'toothpaste':
        value = 'Tooth Paste';
        break;
      case 'skincare':
        value = 'Skin Care';
        break;
    }
    return value;
  }
}
