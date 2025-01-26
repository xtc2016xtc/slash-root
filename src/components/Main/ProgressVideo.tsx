import { VideoProgressBarProps } from "@/types";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useRef } from "react";

const ProgressVideo = ({ videoRef }:VideoProgressBarProps) => {
  /* 视频进度条 */
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const handleTimeUpdate = () => {
      if (videoRef.current && videoRef.current.duration) {
        const progress = (videoRef.current.currentTime / videoRef.current.duration);
        NProgress.set(progress); // 更新进度条位置
      }
    };

    const handleEnded = () => {
      NProgress.done(); // 视频结束时完成进度条
    };

    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    videoRef.current.addEventListener('ended', handleEnded);

    // 初始化进度条配置
    NProgress.configure({
      showSpinner: false,
      minimum: 0.05,
      trickleSpeed: 100,
    });

    // 当组件挂载时开始进度条
    NProgress.start();

    return () => {
      videoRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
      videoRef.current?.removeEventListener('ended', handleEnded);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      NProgress.done();
    };
  }, [videoRef]);

  return null;
}

export default ProgressVideo;