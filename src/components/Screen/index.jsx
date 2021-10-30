import "./styles.scss";

import { createContext, useState } from "react";
import classNames from "classnames";
import useKeyEvent from "../../hooks/useKeyEvent";
import StartMenu from "../StartMenu";
import TaskBar from "../TaskBar";
import Desktop from "./Desktop";

const NewWindowContext = createContext();

const Screen = () => {
  NewWindowContext.displayName = "NewWindowContext";
  const [newWindow, setNewWindow] = useState();

  const [showMenu, setShowMenu] = useState(false);

  useKeyEvent({
    key: 27, // Catch Esc key
    type: "onkeydown",
    callback: () => setShowMenu(false)
  });

  useKeyEvent({
    key: 32, // Catch [CTRL + SPACE] as windows key
    type: "onkeyup",
    modifier: ["ctrlKey"],
    callback: () => setShowMenu((prevState) => !prevState)
  });

  return (
    <div>
      <NewWindowContext.Provider value={{ newWindow, setNewWindow }}>
        <Desktop setShowMenu={setShowMenu} />
        {showMenu && (<StartMenu className={classNames("start-menu", { active: showMenu })} visible={showMenu} />)}
        <TaskBar setShowMenu={setShowMenu} />
      </NewWindowContext.Provider>
    </div>
  );
};

export default Screen;

export { NewWindowContext };
