import openFullscreen from "../../hooks/useFullScreen";
import WindowManager from "../Window/WindowManager";

const Desktop = ({setShowMenu, ...props}) => {
  return (
    <div {...props}
      className="wrapper"
      onClick={() => setShowMenu(false)}
      onDoubleClick={() => openFullscreen()}
    >
      <WindowManager />
    </div>
  );
};

export default Desktop;
