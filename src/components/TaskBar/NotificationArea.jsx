import useDateTime from "../../hooks/useDateTime";
import Icon from "../Icon/Icon";

const NotificationArea = (props) => {
  const { dateTime, dateTimeTitle } = useDateTime();

  return (
    <div className="right-items">
      <div className="icon-item" title="Show hidden icons">
        <Icon name="chevron" />
      </div>
      <div
        className="icon-item"
        title="Linksys R2S&#010;Internet access"
      >
        <Icon name="wifi" />
      </div>
      <div className="icon-item" title="Speakers: 34%">
        <Icon name="volume" />
      </div>
      <div className="date-time" title={dateTimeTitle}>
        {dateTime}
      </div>
      <div className="charm icon-item" title="No new notifications">
        <Icon name="chatbox" />
      </div>
      <div className="show-desktop"></div>
    </div>
  );
};

export default NotificationArea;
