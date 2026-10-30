import { useEffect, useRef } from 'react';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4';
const SENSITIVITY = 0.8;

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const prevXRef = useRef<number | null>(null);
  const hasPrimedRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Decode and prime the first frame so the vibrant red visual renders immediately on load
    const primeFirstFrame = () => {
      if (hasPrimedRef.current) return;
      hasPrimedRef.current = true;

      // Force video frame decode on muted video
      video.currentTime = 0.01;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.pause();
            video.currentTime = 0.01;
          })
          .catch(() => {
            video.currentTime = 0.01;
          });
      }
    };

    video.addEventListener('loadeddata', primeFirstFrame);
    video.addEventListener('canplay', primeFirstFrame);
    video.addEventListener('loadedmetadata', primeFirstFrame);

    if (video.readyState >= 2) {
      primeFirstFrame();
    }

    const requestNextSeek = () => {
      if (!video || !video.duration || isNaN(video.duration)) return;
      if (isSeekingRef.current) return;

      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.005) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      if (!video || !video.duration || isNaN(video.duration)) return;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const nextTime = Math.max(0, Math.min(video.duration, targetTimeRef.current + timeOffset));
      targetTimeRef.current = nextTime;

      requestNextSeek();
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        prevXRef.current = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const clientX = e.touches[0].clientX;
      if (prevXRef.current === null) {
        prevXRef.current = clientX;
        return;
      }

      const delta = clientX - prevXRef.current;
      prevXRef.current = clientX;

      if (!video || !video.duration || isNaN(video.duration)) return;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const nextTime = Math.max(0, Math.min(video.duration, targetTimeRef.current + timeOffset));
      targetTimeRef.current = nextTime;

      requestNextSeek();
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      video.removeEventListener('loadeddata', primeFirstFrame);
      video.removeEventListener('canplay', primeFirstFrame);
      video.removeEventListener('loadedmetadata', primeFirstFrame);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleSeeked = () => {
    isSeekingRef.current = false;
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.005) {
      isSeekingRef.current = true;
      video.currentTime = targetTimeRef.current;
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      if (targetTimeRef.current === 0) {
        targetTimeRef.current = 0.01;
        video.currentTime = 0.01;
      }
    }
  };

  return (
    <>
      {/* Permanent luxury red silk backdrop so the red ambiance is 100% visible instantly */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 70% 50%, #ba151c 0%, #800a10 40%, #450307 75%, #0d0102 100%)',
        }}
        aria-hidden="true"
      />

      {/* Mouse & Touch scrub-controlled Video element */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        onLoadedMetadata={handleLoadedMetadata}
        className="fixed inset-0 z-0 w-full h-full object-cover pointer-events-none select-none"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          objectFit: 'cover',
          objectPosition: '70% center',
        }}
      />
    </>
  );
}
