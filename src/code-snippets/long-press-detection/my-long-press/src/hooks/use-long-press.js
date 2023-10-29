import { useState, useRef } from "react";

export default function useLongPress() {
  const [action, setAction] = useState();

  const timerRef = useRef();
  const isLongPress = useRef();

  const startPressTimer = () => {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      setAction("longPress");
      isLongPress.current = true;
    }, 500);
  };

  function handleOnClick(e) {
    if (isLongPress.current) {
      return;
    }
    setAction("click");
  }

  const handleOnMouseDown = () => {
    startPressTimer();
  };

  const handleOnMouseUp = () => {
    clearTimeout(timerRef.current);
  };

  const handleOnTouchStart = () => {
    startPressTimer();
  };

  const handleOnTouchEnd = () => {
    clearTimeout(timerRef.current);
  };

  return {
    action,
    setAction,
    handlers: {
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      onMouseUp: handleOnMouseUp,
      onTouchStart: handleOnTouchStart,
      onTouchEnd: handleOnTouchEnd,
    },
  };
}
