import React, { useEffect, useRef } from "react";
import CardHeader from "../components/CardHeader";
import DropDown from "../components/Dropdown";
import { infoData } from "../dummyData";
import { update, events, drag, trackClick } from "../scripts/scrollBarControl";

const Info = () => {
  const options = [
    {
      key: "calories",
      label: "Food",
      icon: "🔥",
      description: "Plain text input",
    },
    {
      key: "sleep",
      label: "Sleep",
      icon: "💤",
      description: "Numeric values only",
    },
    {
      key: "calConsumed",
      label: "Calories Consumed",
      icon: "🍽️",
      description: "Start and end dates",
    },
  ];

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const scrollThumb = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    const thumb = scrollThumb.current;
    const track = trackRef.current;
    update();
    container.addEventListener("wheel", handleWheel);
    thumb.addEventListener("mousedown", handleMouseDown);
    track.addEventListener("click", handleTrackClick);

    function handleTrackClick(e) {
      if (e.target == thumb) return;
      trackClick(e, container, content);
    }

    function handleWheel(e) {
      events(e, content);
    }

    function handleMouseDown(e) {
      drag(e, content, container);
    }

    return () => {
      container.removeEventListener("wheel", handleWheel);
      thumb.removeEventListener("mousedown", handleMouseDown);
      track.removeEventListener("click", handleTrackClick);
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between shrink-0">
        <CardHeader name="Info" icon="🧠" />
        <DropDown options={options} key="calories" size="sm" />
      </div>

      <div ref={containerRef} id="scroll-container">
        <div ref={contentRef} id="scroll-content">
          {Array(20)
            .fill()
            .map((_, i) => (
              <div
                className="p-2 font-Inter hover:bg-accent-hover/20 hover:cursor-pointer rounded-md border-b border-border transition-all duration-200 ease-in-out"
                key={i}
              >
                <h1 className="text-[15px] font-semibold text-accent">
                  {infoData.workouts.back[0].name}
                </h1>
                <p className="text-text-secondary text-[14px] font-medium">
                  {infoData.workouts.back[0].reps}
                </p>
              </div>
            ))}
        </div>
        <div ref={trackRef} id="scroll-track">
          <div ref={scrollThumb} id="scroll-thumb"></div>
        </div>
      </div>
    </div>
  );
};
export default Info;
