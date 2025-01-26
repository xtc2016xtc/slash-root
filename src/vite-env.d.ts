/// <reference types="vite/client" />


// 定义一个接口 ImportMetaEnv 来描述从 `import.meta.env` 获取的环境变量及其类型。
interface ImportMetaEnv {
  // VITE_APP_ROUTER_MODE: 这个属性定义了一个字符串枚举，允许的值为 "permission" 或 "module"。
  // 通常用于配置应用使用的路由模式（基于权限或模块）。
  readonly VITE_APP_ROUTER_MODE: "permission" | "module";

  // VITE_APP_BASE_API: 字符串类型，存储API的基础URL。这在不同环境中（如开发、生产）可能有所不同。
  readonly VITE_APP_BASE_API: string;

  // VITE_APP_HOMEPAGE: 字符串类型，表示应用的首页路径。常用于重定向到应用的默认页面。
  readonly VITE_APP_HOMEPAGE: string;

  // VITE_APP_BASE_PATH: 字符串类型，代表应用的基础路径。这对于部署在子目录中的应用特别有用。
  readonly VITE_APP_BASE_PATH: string;

  // VITE_APP_ENV: 字符串枚举类型，允许的值为 "development" 或 "production"。标识当前应用运行的环境。
  readonly VITE_APP_ENV: "development" | "production";
}

// 定义一个接口 ImportMeta 来扩展 `import.meta` 对象的类型定义。
// 这样做可以让 TypeScript 知道 `import.meta.env` 包含哪些属性以及这些属性的具体类型。
interface ImportMeta {
  // env 属性的类型是 ImportMetaEnv，这意味着你可以通过 import.meta.env 访问所有定义在 ImportMetaEnv 中的属性。
  readonly env: ImportMetaEnv;
}