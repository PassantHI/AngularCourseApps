import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'temp',
    standalone:true
})
export class TempPipe implements PipeTransform{
    transform(value: string|number|null, ...args: any[]) {
        if(value==null)return value
        let val:number;
        if(typeof value=='string'){
            val=parseFloat(value);
        }else {
            val=value
        }

        const outputTemp=val*(9/5)+32
        return `${outputTemp} °F`
        
    }

}