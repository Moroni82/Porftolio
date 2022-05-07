import { useEffect, useState } from "react";

const getIsDesktop = () =>
  globalThis.window !== undefined &&
  window.matchMedia("(min-width: 901px)").matches;

const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const keyDownHandler = (e) => {
    if (e.code === "Escape") {
      setIsOpen(false);
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen && !isDesktop ? "hidden" : "auto";

    if (isOpen && !isDesktop) {
      document.addEventListener("keydown", keyDownHandler);
    } else {
      document.removeEventListener("keydown", keyDownHandler);
    }

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [isOpen, isDesktop]);

  useEffect(() => {
    setIsDesktop(getIsDesktop());

    const resizeHandler = () => {
      const isDesktopNow = getIsDesktop();

      setIsDesktop(isDesktopNow);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return {
    isOpen,
    toggle,
    isDesktop,
  };
};

export default useMenu;
