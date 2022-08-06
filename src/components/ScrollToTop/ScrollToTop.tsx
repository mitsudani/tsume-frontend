import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }: { children: ReactElement }): JSX.Element => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollToTop;
