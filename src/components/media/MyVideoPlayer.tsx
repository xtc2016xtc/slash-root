import React, { useRef } from 'react';
import ProgressVideo from '@/components/Main/ProgressVideo';

const MyVideoPlayer: React.FC = () => {

  const videoElement = useRef<HTMLVideoElement>(null); // 创建一个 ref 来引用视频元素

  return (
    <div>
      {/* 视频元素，ref 属性用于让 ProgressVideo 能够控制它 */}
      <video ref={videoElement} src="/video.mp4" controls></video>
      
      {/* ProgressVideo 组件，通过 videoRef 属性将视频元素的 ref 传递进去 */}
      <ProgressVideo videoRef={videoElement} />
    </div>
  );
}

export default MyVideoPlayer;