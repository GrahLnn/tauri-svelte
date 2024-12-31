/// <reference types="@rsbuild/core/types" />
/// <reference types="svelte" />

declare module "*.svelte" {
  const component: any;
  export default component;
}
