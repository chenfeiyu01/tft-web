declare module '*.m.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// 如果你还需要支持其他样式模块，也可以添加：
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: string;
  export default content;
}
