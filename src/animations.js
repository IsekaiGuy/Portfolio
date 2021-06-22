export const FadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 3,
    },
  },
};

export const ButtonScale = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 2.5,
    },
  },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, staggerChildren: 0.2 },
  },
};

export const ZFade = {
  hidden: {
    opacity: 0,
    zIndex: 1,
  },
  show: {
    zIndex: 30,
    opacity: 1,
    transition: { ease: "easeIn", duration: 3.5 },
  },
};

export const SlideInRight = {
  hidden: {
    x: "150%",
    skew: "-30deg",
  },
  show: {
    x: 0,
    skew: 0,
    transition: {
      ease: "easeIn",
      duration: 0.5,
      staggerChildren: 0.8,
    },
  },
};

export const LineWidthAnim = {
  hidden: {
    width: 0,
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
