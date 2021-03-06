import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterSrting: string, propName: string): any {
    if (value.length === 0) {
      return value; 
    }
    const resultArry = [];
    for (const item of value ) {
      if (item[propName] === filterSrting) {
        resultArry.push(item);
      }
    }
    return resultArry; 
  }

}
