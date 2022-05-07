import { useEffect, useState } from 'react';
import './ScrollToTop.css';

export const Scroll = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <div className="ScrollContainer">
      <button className="scroll" onClick={handleClick}>
        Вверх
      </button>
    </div>
  );
};
