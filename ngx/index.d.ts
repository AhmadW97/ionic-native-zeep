import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Zeep
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Zeep } from '@ionic-native/zeep';
 *
 *
 * constructor(private zeep: Zeep) { }
 *
 * ...
 *
 *
 * this.zeep.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Zeep extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    zip(sourceUrl: string, destZip: string, password: string): Promise<any>;
    unzip(sourceZip: string, destUrl: string, password: string): Promise<any>;
}
