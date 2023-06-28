import { Pipe, PipeTransform } from '@angular/core';
import { alumnosIr } from './alumnosIr';
@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: alumnosIr[], args: string): alumnosIr[] {

    let filter: string = args? args.toLocaleLowerCase():'';
    
    return filter? value.filter((alumno:alumnosIr)=>
    alumno.nombre.toLocaleLowerCase().indexOf(filter)!=-1):value;
  }
}
