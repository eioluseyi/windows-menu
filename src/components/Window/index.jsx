import "./window.scss";
import { useDrag } from "react-dnd";

const Window = ({ id = "", left = 0, top = 0, title = "File Explorer" }) => {
  const [{ isDragging, opacity }, dragRef, previewRef] = useDrag(
    () => ({
      type: "window",
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    [left, top]
  );

  if (isDragging) {
    return <div ref={dragRef} />;
  }
  return (
    <div className="window--draggable" ref={previewRef} style={{ left, top }}>
      <div ref={dragRef}>{title}</div>
      window body
    </div>
  );
};

export default Window;
