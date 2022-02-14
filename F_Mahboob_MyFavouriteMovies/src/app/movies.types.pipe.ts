import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';


@Pipe({
  name: 'moviesTypes'
})
export class MoviesTypesPipe implements PipeTransform {

  transform(watchList: Content[], type?: string){
    return watchList.filter(watches => watches.type == type ? watchList : null);
}

}
