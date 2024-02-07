import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: any[], filter: string): any[] {
    const filterValue = filter.toLowerCase();
    console.log("data", data)
    console.log("filter", filter)
    console.log(data.filter(item => item.label.toUpperCase().indexOf(filter.toUpperCase()) > -1), "filterd")
    return filterValue
      ? data.filter(item => item.label.toUpperCase().indexOf(filter.toUpperCase()) > -1)
      : data;
  }

}

