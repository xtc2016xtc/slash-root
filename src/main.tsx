import './index.css'
import App from './App.tsx'
import ReactDOM from "react-dom/client";

/* 确保在多线程环境下也能正确运行 */
import { HelmetProvider } from 'react-helmet-async';

/* 优化增强数据分析 */
import { Analytics } from '@vercel/analytics/react'

/* 如果在缓存中有对应的数据（通过查询键匹配）且未过期，你可以立即得到结果，无需请求。
如果没有缓存或缓存已经过期，那么react-query将会重新请求并且缓存数据。*/
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

/* 减少初始加载时间 */
import { Suspense } from 'react';

/* 开发调试工具 */
// import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

/* 轻量级进度条 */
import ProgressBar from '@/components/Main/ProgressBar.tsx'



/* 备注 */
const charAt = `
    ███████╗██╗     ███████╗██╗   ██╗██╗███████╗
    ██╔════╝██║     ██╔════╝██║   ██║██║██╔════╝
    █████╗  ██║     █████╗  ██║   ██║██║███████╗
    ██╔══╝  ██║     ██╔══╝  ╚██╗ ██╔╝██║╚════██║
    ███████╗███████╗███████╗ ╚████╔╝ ██║███████║
    ╚══════╝╚══════╝╚══════╝  ╚═══╝  ╚═╝╚══════╝
`;
console.info(`%c${charAt}`, "color: #5BE49B");
/* Elyisa */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <HelmetProvider>
    <QueryClientProvider client={new QueryClient()}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Suspense>
        <ProgressBar />
        <Analytics />
        <App />
      </Suspense>
    </QueryClientProvider>
  </HelmetProvider>,
)
