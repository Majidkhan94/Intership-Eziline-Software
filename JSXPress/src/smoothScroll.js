export const smoothScroll = (id, duration = 1000) => {
  const target = document.getElementById(id);
  if (!target) return;

  // URL update
  window.history.pushState(null, "", `#${id}`);

  const start = window.pageYOffset;
  const end = target.offsetTop;
  const distance = end - start;
  let startTime = null;

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * easeInOut(progress));

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const easeInOut = (t) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  requestAnimationFrame(animation);
};
