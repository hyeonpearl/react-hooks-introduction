import { useRef } from 'react';

export const useFullscreen = callback => {
  const element = useRef();
  const checkCallback = isFull => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      checkCallback(true);
    }
  };

  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
      if (element.current.exitFullscreen) {
        element.current.exitFullscreen();
      } else if (element.current.mozCancleFullscreen) {
        element.current.mozCancleFullscreen();
      } else if (element.current.webkitExitFullscreen) {
        element.current.webkitExitFullscreen();
      } else if (element.current.msExitFullscreen) {
        element.current.msExitFullscreen();
      }
      checkCallback(false);
    }
  };
  return { element, triggerFull, exitFull };
};