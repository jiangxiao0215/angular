import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { APP_ID_RANDOM_PROVIDER } from './application_tokens';
import { IterableDiffers, defaultIterableDiffers, KeyValueDiffers, defaultKeyValueDiffers } from './change_detection/change_detection';
import { AppViewManager } from './linker/view_manager';
import { AppViewManager_ } from "./linker/view_manager";
import { Compiler } from './linker/compiler';
import { Compiler_ } from "./linker/compiler";
import { DynamicComponentLoader } from './linker/dynamic_component_loader';
import { DynamicComponentLoader_ } from "./linker/dynamic_component_loader";
var __unused; // avoid unused import when Type union types are erased
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
export const APPLICATION_COMMON_PROVIDERS = CONST_EXPR([
    new Provider(Compiler, { useClass: Compiler_ }),
    APP_ID_RANDOM_PROVIDER,
    new Provider(AppViewManager, { useClass: AppViewManager_ }),
    new Provider(IterableDiffers, { useValue: defaultIterableDiffers }),
    new Provider(KeyValueDiffers, { useValue: defaultKeyValueDiffers }),
    new Provider(DynamicComponentLoader, { useClass: DynamicComponentLoader_ })
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtV2EyZzg3TDEudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBTyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDbEQsRUFBVSxRQUFRLEVBQXdCLE1BQU0sc0JBQXNCO09BQ3RFLEVBR0wsc0JBQXNCLEVBQ3ZCLE1BQU0sc0JBQXNCO09BQ3RCLEVBQ0wsZUFBZSxFQUNmLHNCQUFzQixFQUN0QixlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3ZCLE1BQU0scUNBQXFDO09BQ3JDLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCO09BQzdDLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCO09BQzlDLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CO09BQ25DLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUJBQW1CO09BQ3BDLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxtQ0FBbUM7T0FDakUsRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQztBQUV6RSxJQUFJLFFBQWMsQ0FBQyxDQUFFLHVEQUF1RDtBQUU1RTs7O0dBR0c7QUFDSCxPQUFPLE1BQU0sNEJBQTRCLEdBQW1DLFVBQVUsQ0FBQztJQUNyRixJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7SUFDN0Msc0JBQXNCO0lBQ3RCLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUMsQ0FBQztJQUN6RCxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztJQUNqRSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztJQUNqRSxJQUFJLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxFQUFDLFFBQVEsRUFBRSx1QkFBdUIsRUFBQyxDQUFDO0NBQzFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZSwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXIsIEluamVjdG9yLCBPcGFxdWVUb2tlbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtcbiAgQVBQX0NPTVBPTkVOVF9SRUZfUFJPTUlTRSxcbiAgQVBQX0NPTVBPTkVOVCxcbiAgQVBQX0lEX1JBTkRPTV9QUk9WSURFUlxufSBmcm9tICcuL2FwcGxpY2F0aW9uX3Rva2Vucyc7XG5pbXBvcnQge1xuICBJdGVyYWJsZURpZmZlcnMsXG4gIGRlZmF1bHRJdGVyYWJsZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgZGVmYXVsdEtleVZhbHVlRGlmZmVyc1xufSBmcm9tICcuL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge0FwcFZpZXdNYW5hZ2VyfSBmcm9tICcuL2xpbmtlci92aWV3X21hbmFnZXInO1xuaW1wb3J0IHtBcHBWaWV3TWFuYWdlcl99IGZyb20gXCIuL2xpbmtlci92aWV3X21hbmFnZXJcIjtcbmltcG9ydCB7Q29tcGlsZXJ9IGZyb20gJy4vbGlua2VyL2NvbXBpbGVyJztcbmltcG9ydCB7Q29tcGlsZXJffSBmcm9tIFwiLi9saW5rZXIvY29tcGlsZXJcIjtcbmltcG9ydCB7RHluYW1pY0NvbXBvbmVudExvYWRlcn0gZnJvbSAnLi9saW5rZXIvZHluYW1pY19jb21wb25lbnRfbG9hZGVyJztcbmltcG9ydCB7RHluYW1pY0NvbXBvbmVudExvYWRlcl99IGZyb20gXCIuL2xpbmtlci9keW5hbWljX2NvbXBvbmVudF9sb2FkZXJcIjtcblxudmFyIF9fdW51c2VkOiBUeXBlOyAgLy8gYXZvaWQgdW51c2VkIGltcG9ydCB3aGVuIFR5cGUgdW5pb24gdHlwZXMgYXJlIGVyYXNlZFxuXG4vKipcbiAqIEEgZGVmYXVsdCBzZXQgb2YgcHJvdmlkZXJzIHdoaWNoIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBhbnkgQW5ndWxhclxuICogYXBwbGljYXRpb24sIHJlZ2FyZGxlc3Mgb2YgdGhlIHBsYXRmb3JtIGl0IHJ1bnMgb250by5cbiAqL1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0NPTU1PTl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBuZXcgUHJvdmlkZXIoQ29tcGlsZXIsIHt1c2VDbGFzczogQ29tcGlsZXJffSksXG4gIEFQUF9JRF9SQU5ET01fUFJPVklERVIsXG4gIG5ldyBQcm92aWRlcihBcHBWaWV3TWFuYWdlciwge3VzZUNsYXNzOiBBcHBWaWV3TWFuYWdlcl99KSxcbiAgbmV3IFByb3ZpZGVyKEl0ZXJhYmxlRGlmZmVycywge3VzZVZhbHVlOiBkZWZhdWx0SXRlcmFibGVEaWZmZXJzfSksXG4gIG5ldyBQcm92aWRlcihLZXlWYWx1ZURpZmZlcnMsIHt1c2VWYWx1ZTogZGVmYXVsdEtleVZhbHVlRGlmZmVyc30pLFxuICBuZXcgUHJvdmlkZXIoRHluYW1pY0NvbXBvbmVudExvYWRlciwge3VzZUNsYXNzOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyX30pXG5dKTsiXX0=