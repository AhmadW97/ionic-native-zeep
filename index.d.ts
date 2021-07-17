import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Zeep
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Zeep } from '@ionic-native/zeep/ngx';
 *
 *
 * constructor(private zeep: Zeep) { }
 *
 * ...
 *
 *
 * this.zeep.zip('/path', 'filename.zip' , '123')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.zeep.unzip('filename.zip', '/path' , '123')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ZeepOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param sourceUrl {string} Some param to configure something
     * @param destZip {string} Some param to configure something
     * @param sourceZip {string} Some param to configure something
     * @param destUrl {string} Some param to configure something
     * @param password {string} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    zip(sourceUrl: string, destZip: string, password: string): Promise<any>;
    unzip(sourceZip: string, destUrl: string, password: string): Promise<any>;
}

export declare const Zeep: ZeepOriginal;