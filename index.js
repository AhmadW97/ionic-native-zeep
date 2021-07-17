var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ZeepOriginal = /** @class */ (function (_super) {
    __extends(ZeepOriginal, _super);
    function ZeepOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeepOriginal.prototype.zip = function (sourceUrl, destZip, password) { return cordova(this, "zip", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    ZeepOriginal.prototype.unzip = function (sourceZip, destUrl, password) { return cordova(this, "unzip", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    ZeepOriginal.pluginName = "Zeep";
    ZeepOriginal.plugin = "cordova-plugin-zeep";
    ZeepOriginal.pluginRef = "Zeep";
    ZeepOriginal.repo = "https://github.com/vlinde/cordova-plugin-zeep.git";
    ZeepOriginal.platforms = ["Android", "iOS"];
    return ZeepOriginal;
}(IonicNativePlugin));
var Zeep = new ZeepOriginal();
export { Zeep };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plZXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBaUNsRyx3QkFBaUI7Ozs7SUFlekMsa0JBQUcsYUFBQyxTQUFpQixFQUFFLE9BQWUsRUFBRSxRQUFnQjtJQVd4RCxvQkFBSyxhQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFFBQWdCOzs7Ozs7ZUF2RTVEO0VBNkMwQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIFplZXBcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFplZXAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3plZXAnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHplZXA6IFplZXApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnplZXAuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdaZWVwJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4temVlcCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdaZWVwJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZsaW5kZS9jb3Jkb3ZhLXBsdWdpbi16ZWVwLmdpdCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWmVlcCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMSB7c3RyaW5nfSBTb21lIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzIge251bWJlcn0gQW5vdGhlciBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YShcbiAgICB7XG4gICAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgICAgY2xlYXJGdW5jdGlvbjogJ2NsZWFyV2F0Y2gnXG4gICAgfVxuICApXG4gIHppcChzb3VyY2VVcmw6IHN0cmluZywgZGVzdFppcDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoXG4gICAge1xuICAgICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICAgIGNsZWFyRnVuY3Rpb246ICdjbGVhcldhdGNoJ1xuICAgIH1cbiAgKVxuICB1bnppcChzb3VyY2VaaXA6IHN0cmluZywgZGVzdFVybDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbn1cbiJdfQ==