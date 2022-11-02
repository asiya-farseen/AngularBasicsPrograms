import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialstrength'
})
export class ExponentialstrengthPipe implements PipeTransform {

  transform(value: number, exponent=1): number{
    return Math.pow(value,exponent);
  }

}
