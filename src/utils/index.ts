import { provideGlobalConfig } from "element-plus";

interface IFuntion {
    (): any;
}

// 把驼峰转换成横岗
export const toLine = (value:string) => {   
    return value.replace(/(A-Z)g/, '$1').toLocaleLowerCase()
}
// 防抖  用户多次操作已最后一次为准
export const debounce =  ( fn: Function , delay: number = 300 ): any => {
    let timer: any = null;
    return (...args: any )  => {
        if ( timer ) {clearTimeout(timer)}
        timer = setTimeout ( () => {
            fn.apply(this,args);
        },delay)
    }
}

// 节流 适用于密集调用的时候，每隔一段时间来执行一次
export const throttle = ( fn: Function ,delay: number =300 ): any => {
    let time:any; //不用赋值
    return (...args: any) => {
        if ( !time ) {
            time = setTimeout ( () => {
                fn.apply( this, args);
                time = null;
            },delay)
        }
    }
}
