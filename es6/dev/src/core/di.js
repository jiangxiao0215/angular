/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export { InjectMetadata, OptionalMetadata, InjectableMetadata, SelfMetadata, HostMetadata, SkipSelfMetadata, DependencyMetadata } from './di/metadata';
// we have to reexport * because Dart and TS export two different sets of types
export * from './di/decorators';
export { forwardRef, resolveForwardRef } from './di/forward_ref';
export { Injector } from './di/injector';
export { Binding, ProviderBuilder, ResolvedFactory, Dependency, bind, Provider, provide } from './di/provider';
export { Key } from './di/key';
export { NoProviderError, AbstractProviderError, CyclicDependencyError, InstantiationError, InvalidProviderError, NoAnnotationError, OutOfBoundsError } from './di/exceptions';
export { OpaqueToken } from './di/opaque_token';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVdhMmc4N0wxLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsU0FDRSxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osWUFBWSxFQUNaLGdCQUFnQixFQUNoQixrQkFBa0IsUUFDYixlQUFlLENBQUM7QUFFdkIsK0VBQStFO0FBQy9FLGNBQWMsaUJBQWlCLENBQUM7QUFFaEMsU0FBUSxVQUFVLEVBQUUsaUJBQWlCLFFBQXFCLGtCQUFrQixDQUFDO0FBRTdFLFNBQVEsUUFBUSxRQUFPLGVBQWUsQ0FBQztBQUN2QyxTQUNFLE9BQU8sRUFDUCxlQUFlLEVBRWYsZUFBZSxFQUNmLFVBQVUsRUFDVixJQUFJLEVBRUosUUFBUSxFQUVSLE9BQU8sUUFDRixlQUFlLENBQUM7QUFDdkIsU0FBUSxHQUFHLFFBQU8sVUFBVSxDQUFDO0FBQzdCLFNBQ0UsZUFBZSxFQUNmLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsZ0JBQWdCLFFBQ1gsaUJBQWlCLENBQUM7QUFDekIsU0FBUSxXQUFXLFFBQU8sbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGBkaWAgbW9kdWxlIHByb3ZpZGVzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciBzZXJ2aWNlcy5cbiAqL1xuXG5leHBvcnQge1xuICBJbmplY3RNZXRhZGF0YSxcbiAgT3B0aW9uYWxNZXRhZGF0YSxcbiAgSW5qZWN0YWJsZU1ldGFkYXRhLFxuICBTZWxmTWV0YWRhdGEsXG4gIEhvc3RNZXRhZGF0YSxcbiAgU2tpcFNlbGZNZXRhZGF0YSxcbiAgRGVwZW5kZW5jeU1ldGFkYXRhXG59IGZyb20gJy4vZGkvbWV0YWRhdGEnO1xuXG4vLyB3ZSBoYXZlIHRvIHJlZXhwb3J0ICogYmVjYXVzZSBEYXJ0IGFuZCBUUyBleHBvcnQgdHdvIGRpZmZlcmVudCBzZXRzIG9mIHR5cGVzXG5leHBvcnQgKiBmcm9tICcuL2RpL2RlY29yYXRvcnMnO1xuXG5leHBvcnQge2ZvcndhcmRSZWYsIHJlc29sdmVGb3J3YXJkUmVmLCBGb3J3YXJkUmVmRm59IGZyb20gJy4vZGkvZm9yd2FyZF9yZWYnO1xuXG5leHBvcnQge0luamVjdG9yfSBmcm9tICcuL2RpL2luamVjdG9yJztcbmV4cG9ydCB7XG4gIEJpbmRpbmcsXG4gIFByb3ZpZGVyQnVpbGRlcixcbiAgUmVzb2x2ZWRCaW5kaW5nLFxuICBSZXNvbHZlZEZhY3RvcnksXG4gIERlcGVuZGVuY3ksXG4gIGJpbmQsXG5cbiAgUHJvdmlkZXIsXG4gIFJlc29sdmVkUHJvdmlkZXIsXG4gIHByb3ZpZGVcbn0gZnJvbSAnLi9kaS9wcm92aWRlcic7XG5leHBvcnQge0tleX0gZnJvbSAnLi9kaS9rZXknO1xuZXhwb3J0IHtcbiAgTm9Qcm92aWRlckVycm9yLFxuICBBYnN0cmFjdFByb3ZpZGVyRXJyb3IsXG4gIEN5Y2xpY0RlcGVuZGVuY3lFcnJvcixcbiAgSW5zdGFudGlhdGlvbkVycm9yLFxuICBJbnZhbGlkUHJvdmlkZXJFcnJvcixcbiAgTm9Bbm5vdGF0aW9uRXJyb3IsXG4gIE91dE9mQm91bmRzRXJyb3Jcbn0gZnJvbSAnLi9kaS9leGNlcHRpb25zJztcbmV4cG9ydCB7T3BhcXVlVG9rZW59IGZyb20gJy4vZGkvb3BhcXVlX3Rva2VuJztcbiJdfQ==