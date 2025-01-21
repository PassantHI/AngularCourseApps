import { Directive, ElementRef, inject, input, signal } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone:true,

    host:{
        '(click)':'onClickLink($event)'
    }


})
export class SafeLinkDirictive{
    queryParam=input('',{alias:'appSafeLink'});
    private hoseElementRef=inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    constructor(){
        console.log("safe link directive ");
    }

    onClickLink(event:MouseEvent){
        const leave=window.confirm("want to leave page?")
        if(leave)
            {
              /*  const link=(event.target as HTMLAnchorElement).href;
                (event.target as HTMLAnchorElement).href=link+'?from='+this.queryParam();*/

                const link=this.hoseElementRef.nativeElement.href;
                this.hoseElementRef.nativeElement.href=link+'?from='+this.queryParam();
                
                return;
            }
        event.preventDefault();
    }





}