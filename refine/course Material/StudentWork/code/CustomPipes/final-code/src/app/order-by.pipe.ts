import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

transform(value: Array<any>, field: string): any {
    if (value == null || value.length <= 1) {
      return value;
    }
	 if (field.startsWith('-')) {
      field = field.substring(1);
 value.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });	  
	 }
else{	 
  value.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
}
    return value;
  }


}
