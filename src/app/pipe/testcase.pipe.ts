import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'testcase'
})
export class TestCasePipe implements PipeTransform{
    // после : указывается то что будет возвращаться из метода 
    transform(value: any, ...args: any[]): any{
        // value - это то, с чем должен работать наш пайп
        let result = '';
        // внутри пайпа создаем новый стандартный пайп, который будем использовать - чисто 
        // для примера, на самом деле это бесполезная штука
        let upper = new UpperCasePipe();

        for (let i =0; i<value.length; i++){
            let c = value.charAt(i);
            if((i+1) %2==0){
                result+= upper.transform(c);
            } else {
                result+= c.toLowerCase();
            }
        }       
        return result;
    }
}
