import { useState, useEffect, useRef } from "react";
import { debounce } from "./common";

export const useSwipe = selector => {
  var xDown = null;
  var yDown = null;

  const [isListening, setIsListening] = useState(false);
  const [swipe, setSwipe] = useState({
    dir: "",
    count: 0
  });
  // const [swipeCount, setSwipeCount] = useState(0);

  useEffect(() => {
    let elem = document.querySelector(selector);
    if (!isListening && selector) {
      elem.addEventListener(
        "touchstart",
        debounce(handleTouchStart, 500),
        false
      );
      elem.addEventListener("touchmove", debounce(handleTouchMove, 500), false);
      setIsListening(true);
    }
    return () => {
      if (isListening && elem) {
        elem.removeEventListener("touchstart", debounce(handleTouchStart, 500)),
          elem.removeEventListener("touchmove", debounce(handleTouchMove, 500));
      }
    };
  }, [selector]);

  const trackSwipe = dir => {
    setSwipe(prev => {
      return {
        ...prev,
        dir: dir
      };
    });
    setSwipe(prev => {
      if (prev.dir === "left") {
        return {
          ...prev,
          count: prev.count - 1
        };
      } else if (prev.dir === "right") {
        return {
          ...prev,
          count: prev.count + 1
        };
      }
    });
  };

  const getTouches = evt => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    );
  };

  const handleTouchStart = evt => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = evt => {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        // alert("right");
        trackSwipe("right");
      } else {
        // alert("left");
        trackSwipe("left");
      }
    } else {
      if (yDiff > 0) {
        // top;
      } else {
        alert("down");
        // down
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return [swipe];
};
