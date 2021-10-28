import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 100) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowUp style={{ height: "30px" }} />
    </div>
  );
};

export default ScrollToTop;
