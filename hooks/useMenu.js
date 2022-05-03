import { useState, useEffect } from "react";

const getIsDesktop = () =>
  globalThis.window !== undefined &&
  window.matchMedia("(min-width: 901px)").matches;

const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(getIsDesktop());

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen && !isDesktop ? "hidden" : "auto";
  }, [isOpen, isDesktop]);

  useEffect(() => {
    const cb = () => {
      const isDesktopNow = getIsDesktop();

      if (isDesktopNow !== isDesktop) {
        setIsDesktop(isDesktopNow);
      }
    };

    window.addEventListener("resize", cb);

    return () => {
      window.removeEventListener("resize", cb);
    };
  }, [isDesktop]);

  return {
    isOpen,
    toggle,
  };
};

export default useMenu;
