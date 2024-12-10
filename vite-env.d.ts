/// <reference types="vite/client" />

declare module '*.m.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
