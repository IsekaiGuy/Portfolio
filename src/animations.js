export const FadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const ButtonScale = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: [1.2, 1],
    transition: {
      duration: 0.2,
    },
  },
};

export const FadeOut = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
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
    x: "100%",
    skew: "-30deg",
  },
  show: {
    x: 0,
    skew: 0,
    transition: {
      ease: "easeIn",
      duration: 0.2,
      staggerChildren: 0.7,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100%",
    skew: "45deg",
    transition: { ease: "easeIn", duration: 0.5 },
  },
};
