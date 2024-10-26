import { Pipe, PipeTransform } from '@angular/core';
import { task } from './components/tasklist/tasklist.component';

@Pipe({
  name: 'filtertask'
})
export class FiltertaskPipe implements PipeTransform {

  transform(value: task[], ...args: string[]): task[] {
    let searchtext = args[0]

    return value.filter(a=>a.title.toLowerCase().includes(searchtext.toLowerCase()) || a.description.toLowerCase().includes(searchtext.toLowerCase()))
  }

}
