import "./styles.scss";

import AppList from "./AppList";
import PinnedApps from "./PinnedApps";
import SideBar from "./SideBar";

const StartMenu = ({ visible, ...rest }) => {
	return (
		<div {...rest}>
			<SideBar />
			<AppList />
			<PinnedApps />
		</div>
	);
};

export default StartMenu;
