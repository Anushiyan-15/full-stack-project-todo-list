import { Pipe, PipeTransform } from '@angular/core';
import { User, address } from './user.service';

@Pipe({
  name: 'filteruser'
})
export class FilteruserPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User[] {
    let searchtext = args[0]

    return value.filter(a=>a.name.toLowerCase().includes(searchtext.toLowerCase()) || a.address?.city.toLowerCase().includes(searchtext.toLowerCase()))
  }
}
