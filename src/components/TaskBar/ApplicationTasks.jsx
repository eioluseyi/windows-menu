import classNames from "classnames";
import { useContext } from "react";
import Icon from "../Icon/Icon";
import { NewWindowContext } from "../Screen";

const ApplicationTasks = (props) => {
  const newWindowContextProvider = useContext(NewWindowContext);

  const newWindow = (props) => {
    newWindowContextProvider.newWindow(props);
  };

  const applicationList = [
    { name: "cortana", title: "Talk to Cortana" },
    { name: "chrome", title: "Google Chrome" },
    { name: "firefox", title: "Firefox" }
  ];

  return (
    <div className="left-items">
      {applicationList.map((app) => (
        <div
          key={app.name}
          onClick={() => newWindow(app)}
          className={classNames("icon-item", app.name)}
          title={app.title}
        >
          <Icon name={app.name} />
        </div>
      ))}
    </div>
  );
};

export default ApplicationTasks;
