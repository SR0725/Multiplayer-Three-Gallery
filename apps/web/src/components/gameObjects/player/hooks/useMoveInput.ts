import { useEffect, useState } from 'react';

type Props = {
  maxCameraDistance: number;
  minCameraDistance: number;
};

export const useMoveInput = ({
  maxCameraDistance,
  minCameraDistance,
}: Props) => {
  const [goForward, setGoForward] = useState(0);
  const [goRight, setGoRight] = useState(0);
  // 相機、人物的距離，如果為0則代表 第一人稱，如果為 minCameraDistance 以上則代表第三人稱
  const [cameraDistance, setCameraDistance] = useState(0);

  // for desktop move
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'w') {
        setGoForward(1);
      }
      if (event.key === 's') {
        setGoForward(-1);
      }
      if (event.key === 'a') {
        setGoRight(-1);
      }
      if (event.key === 'd') {
        setGoRight(1);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'w' || event.key === 's') {
        setGoForward(0);
      }
      if (event.key === 'a' || event.key === 'd') {
        setGoRight(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // for mobile move
  useEffect(() => {
    const handleTouchGoForwardStart = () => {
      setGoForward(1);
    };
    const handleTouchGoForwardEnd = () => {
      setGoForward(0);
    };
    const handleTouchGoBackwardStart = () => {
      setGoForward(-1);
    };
    const handleTouchGoBackwardEnd = () => {
      setGoForward(0);
    };
    document
      .getElementById('forward')
      ?.addEventListener('touchstart', handleTouchGoForwardStart);
    document
      .getElementById('forward')
      ?.addEventListener('touchend', handleTouchGoForwardEnd);
    document
      .getElementById('backward')
      ?.addEventListener('touchstart', handleTouchGoBackwardStart);
    document
      .getElementById('backward')
      ?.addEventListener('touchend', handleTouchGoBackwardEnd);

    return () => {
      document
        .getElementById('forward')
        ?.removeEventListener('touchstart', handleTouchGoForwardStart);
      document
        .getElementById('forward')
        ?.removeEventListener('touchend', handleTouchGoForwardEnd);
      document
        .getElementById('backward')
        ?.removeEventListener('touchstart', handleTouchGoBackwardStart);
      document
        .getElementById('backward')
        ?.removeEventListener('touchend', handleTouchGoBackwardEnd);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      setCameraDistance((prev) => {
        const newCameraDistance = prev + event.deltaY / 100;
        if (event.deltaY < 0) {
          return newCameraDistance < minCameraDistance ? 0 : newCameraDistance;
        } else {
          if (newCameraDistance < minCameraDistance) {
            return minCameraDistance;
          }
          return newCameraDistance > maxCameraDistance
            ? maxCameraDistance
            : newCameraDistance;
        }
      });
    };
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [maxCameraDistance, minCameraDistance]);

  return {
    goForward,
    goRight,
    cameraDistance,
  };
};
