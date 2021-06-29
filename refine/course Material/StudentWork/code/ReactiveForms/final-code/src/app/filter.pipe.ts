import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'filter' 
})
export class FilterPipe implements PipeTransform {
	transform(sourceList: {name:string, description:string}[], searchText:string){
	  if (searchText === undefined || searchText.length == 0) {
		//No search term
		return sourceList
	  }

	  let reg = new RegExp(searchText, 'i')

	  return sourceList.filter(courses => 
		courses.name.search(reg) >= 0 || courses.description.search(reg) >= 0)
	}
}
