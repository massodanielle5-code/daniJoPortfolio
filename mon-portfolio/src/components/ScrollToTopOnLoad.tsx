import { useEffect } from "react";

function ScrollToTopOnLoad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTopOnLoad;