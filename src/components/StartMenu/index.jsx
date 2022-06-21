import "./styles.scss";
import { createContext, useState } from "react";

import AppList from "./AppList";
import PinnedApps from "./PinnedApps";
import SideBar from "./SideBar";

const scrollContext = createContext();

const StartMenu = ({ visible, ...rest }) => {
	const [scrollObj, setScrollObj] = useState({});

	return (
		<div {...rest} onScroll={(e) => setScrollObj(e)}>
			<scrollContext.Provider value={scrollObj}>
				<SideBar />
				<AppList />
				<PinnedApps />
			</scrollContext.Provider>
		</div>
	);
};

export default StartMenu;
export { scrollContext };
