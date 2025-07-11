let isDragging = false;
let startScrollTop = 0;
let startY = 0;

export const update = () => {
  const container = document.getElementById("scroll-container");
  const content = document.getElementById("scroll-content");
  const track = document.getElementById("scroll-track");
  const thumb = document.getElementById("scroll-thumb");

  const containerHeight = container.offsetHeight;
  const contentHeight = content.scrollHeight;
  const scrollTop = content.scrollTop;

  const thumbHeight = Math.max(
    20,
    (containerHeight / contentHeight) * containerHeight
  );
  const maxScroll = contentHeight - containerHeight;
  const maxThumbTravel = containerHeight - thumbHeight - 20;

  const thumbPos = maxScroll > 0 ? (scrollTop / maxScroll) * maxThumbTravel : 0;

  thumb.style.height = thumbHeight + "px";
  thumb.style.top = thumbPos + "px";
};

export function events(e, content) {
  e.preventDefault(); // Stop default page scroll
  content.scrollTop += e.deltaY; // Scroll our content
  update();
}

export function drag(e, content, container) {
  isDragging = true;
  startY = e.clientY;
  startScrollTop = content.scrollTop;

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseup);

  let targetScrollTop = 0;
  let animationFrame;

  function handleMouseMove(e) {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;
    const containerHeight = container.offsetHeight;
    const contentHeight = content.scrollHeight;

    const scrollRatio = deltaY / containerHeight;
    targetScrollTop = startScrollTop + scrollRatio * contentHeight;

    if (!animationFrame) animateScroll();
  }

  function animateScroll() {
    const currentScroll = content.scrollTop;
    const distance = targetScrollTop - currentScroll;

    // Stop animation if scroll is close enough
    if (Math.abs(distance) < 0.5) {
      content.scrollTop = targetScrollTop;
      animationFrame = null;
      return;
    }

    // Interpolate towards target
    content.scrollTop += distance * 0.2; // lower = smoother
    update(); // update thumb position
    animationFrame = requestAnimationFrame(animateScroll);
  }

  function handleMouseup() {
    isDragging = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseup);
  }
}

export function trackClick(e, container, content) {
  const clickPosRelative = container.getBoundingClientRect();
  const containerHeight = container.offsetHeight;
  const contentHeight = content.scrollHeight;

  const clickPostitionAbsolute = e.clientY - clickPosRelative.top;
  const maxScroll = contentHeight - containerHeight;
  const scrollRatio = clickPostitionAbsolute / containerHeight;

  content.scrollTop = scrollRatio * maxScroll;
  update();
}
