import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(overview: string , limit?: number): unknown {
    return overview.split(' ').slice(0,limit?limit:10).join(' ');
  }

}
