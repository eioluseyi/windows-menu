import ApplicationTasks from "./ApplicationTasks";
import NotificationArea from "./NotificationArea";
import SearchBar from "./SearchBar";
import StartMenuButton from "./StartMenuButton";

const TaskBar = ({ setShowMenu, ...props }) => {
  return (
    <div {...props} className="taskbar">
      <StartMenuButton onClick={() => setShowMenu((prevState) => !prevState)} />
      <SearchBar />
      <ApplicationTasks />
      <NotificationArea />
    </div>
  );
};

export default TaskBar;
