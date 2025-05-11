declare module 'svelte' {
  export interface ComponentConstructorOptions {
    target?: Element | Document | ShadowRoot;
    [prop: string]: any;
  }
}
