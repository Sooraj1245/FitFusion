export function updateScrollBar(props) {
  const { container, content, track, thumb } = props;
  const containerHeight = container.offsetHeight;
  const contentHeight = content.scrollHeight;
  const scrollTop = content.scrollTop;

  const maxScroll = contentHeight - containerHeight;

  const thumbHeight = Math.max(
    20,
    (containerHeight / contentHeight) * containerHeight
  );

  const maxThumbTravel = containerHeight - thumbHeight;
  const thumbPos = maxScroll > 0 ? (scrollTop / maxScroll) * maxThumbTravel : 0;

  thumb.style.height = thumbHeight + "px";
  thumb.style.top = thumbPos + "px";
  console.log(thumb);
}

export function wheelUpdate(e, props) {
  e.preventDefault();
  const { content } = props;
  content.scrollTop += e.deltaY;

  updateScrollBar(props);
}
