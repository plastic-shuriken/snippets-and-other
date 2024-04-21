!function () {
  /**  Intersection options */
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  /** Intersection callback */
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  };

  /** Intersection observer */
  let observer = new IntersectionObserver(callback, options);

  observer.observe(document.querySelector("#video-bg"));
};
