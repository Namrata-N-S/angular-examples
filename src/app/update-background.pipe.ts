import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updateBackground'
})
export class UpdateBackgroundPipe implements PipeTransform {
  transform(value: number, background: string = 'red'): any {
    if (value == 1) {
      return 'green';
    } else {
      return background;
    }
  }
}
