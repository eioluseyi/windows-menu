import { useCallback, useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import rand from "../../utils/rand";
import uuid from "../../utils/uuid";
import { NewWindowContext } from "../Screen";
import Window from "./index";

const WindowManager = () => {
  const newWindowContextProvider = useContext(NewWindowContext);

  const [windows, setWindows] = useState({});
  const newWindow = useCallback(
    ({ title }) => {
      setWindows((w) => ({
        ...w,
        [uuid()]: { top: rand(20, 50), left: rand(50, 100), title: title }
      }));
      // console.log(windowsManagement);
    },
    [setWindows]
  );
  const moveWindow = useCallback(
    (id, left, top) => {
      setWindows({
        ...windows,
        [id]: { left, top }
      });
    },
    [windows, setWindows]
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: "window",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveWindow(item.id, left, top);
        return undefined;
      }
    }),
    [moveWindow]
  );

  useEffect(() => {
    newWindowContextProvider.setNewWindow(() => (props) => newWindow(props));
  }, []);

  return (
    <div className="window-manager" ref={dropRef}>
      {Object.keys(windows).map((key) => {
        const { left, top, title } = windows[key];
        return (
          <Window key={key} id={key} left={left} top={top} title={title} />
        );
      })}
    </div>
  );
};

export default WindowManager;
