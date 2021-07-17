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
    ZeepOriginal.prototype.zip = function (config) { return cordova(this, "zip", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    ZeepOriginal.prototype.unzip = function (config) { return cordova(this, "unzip", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    ZeepOriginal.pluginName = "Zeep";
    ZeepOriginal.plugin = "cordova-plugin-zeep";
    ZeepOriginal.pluginRef = "Zeep";
    ZeepOriginal.repo = "https://github.com/vlinde/cordova-plugin-zeep.git";
    ZeepOriginal.platforms = ["Android", "iOS", "Browser"];
    return ZeepOriginal;
}(IonicNativePlugin));
var Zeep = new ZeepOriginal();
export { Zeep };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3plZXAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBOENsRyx3QkFBaUI7Ozs7SUFlekMsa0JBQUcsYUFBQyxNQUEyQjtJQVEvQixvQkFBSyxhQUFDLE1BQTJCOzs7Ozs7ZUFqRnBDO0VBMEQyQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuIGltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiBpbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG4gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuIFxuIC8qKlxuICAqIEBuYW1lIFplZXBcbiAgKiBAZGVzY3JpcHRpb25cbiAgKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICAqXG4gICogQHVzYWdlXG4gICogdHlwZXNjcmlwdFxuICAqIGltcG9ydCB7IFplZXAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3plZXAvbmd4JztcbiAgKlxuICAqXG4gICogY29uc3RydWN0b3IocHJpdmF0ZSB6ZWVwOiBaZWVwKSB7IH1cbiAgKlxuICAqIC4uLlxuICAqXG4gICogbGV0IGNvbmZpZ1ppcCA9IHtcbiAgKiAgICAgIGZyb206IHNvdXJjZVVybCxcbiAgKiAgICAgIHRvOiBkZXN0WmlwLFxuICAqICAgICAgcGFzc3dvcmQ6IFBhc3NaaXBcbiAgKiAgIH1cbiAgKlxuICAqIHRoaXMuemVlcC56aXAoY29uZmlnWmlwKVxuICAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICpcbiAgKiBsZXQgY29uZmlnVW5aaXAgPSB7XG4gICogICAgICBmcm9tOiBzb3VyY2VaaXAsXG4gICogICAgICB0bzogZGVzdFVybCxcbiAgKiAgICAgIHBhc3N3b3JkOiBQYXNzWmlwXG4gICogICB9XG4gICogdGhpcy56ZWVwLnVuemlwKGNvbmZpZ1VuWmlwKVxuICAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICpcbiAgKiBcbiAgKi9cbiBAUGx1Z2luKHtcbiAgIHBsdWdpbk5hbWU6ICdaZWVwJyxcbiAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXplZXAnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgIHBsdWdpblJlZjogJ1plZXAnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZsaW5kZS9jb3Jkb3ZhLXBsdWdpbi16ZWVwLmdpdCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG4gfSlcbiBASW5qZWN0YWJsZSgpXG4gZXhwb3J0IGNsYXNzIFplZXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gXG4gICAgICAvKipcbiAgICAgICogRXh0cmFjdHMgZmlsZXMgZnJvbSBhIFpJUCBhcmNoaXZlXG4gICAgICAqIEBwYXJhbSBzb3VyY2VVcmwge3N0cmluZ30gU291cmNlIFpJUCBmaWxlXG4gICAgICAqIEBwYXJhbSBkZXN0WmlwIHtzdHJpbmd9IERlc3RpbmF0aW9uIGZvbGRlclxuICAgICAgKiBAcGFyYW0gc291cmNlWmlwIHtzdHJpbmd9IFNvdXJjZSBaSVAgZmlsZVxuICAgICAgKiBAcGFyYW0gZGVzdFVybCB7c3RyaW5nfSBEZXN0aW5hdGlvbiBmb2xkZXJcbiAgICAgICogQHBhcmFtIFBhc3NaaXAge1N0cmluZ30gUGFzc3dvcmQgWmlwXG4gICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIG51bWJlci4gMCBpcyBzdWNjZXNzLCAtMSBpcyBlcnJvclxuICAgICAgKi9cbiAgIEBDb3Jkb3ZhKHtcbiAgICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgICBlcnJvckluZGV4OiAzLFxuICAgICB9KVxuICAgemlwKGNvbmZpZzp7IFtzOiBzdHJpbmddOiBhbnkgfSk6IFByb21pc2U8YW55PiB7XG4gICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gICB9XG4gXG4gICBAQ29yZG92YSh7XG4gICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICAgZXJyb3JJbmRleDogMyxcbiAgICAgfSlcbiAgIHVuemlwKGNvbmZpZzp7IFtzOiBzdHJpbmddOiBhbnkgfSk6IFByb21pc2U8YW55PiB7XG4gICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gICB9XG4gfSJdfQ==