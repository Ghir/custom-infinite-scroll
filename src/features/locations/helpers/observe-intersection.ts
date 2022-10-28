export const observeIntersection = (
  element: HTMLElement,
  handler: IntersectionObserverCallback,
  options = {
    root: null,
    rootMargin: '10px',
    threshold: 1.0,
  },
): IntersectionObserver => {
  const observer = new IntersectionObserver(handler, options);

  observer.observe(element);
  return observer;
};
