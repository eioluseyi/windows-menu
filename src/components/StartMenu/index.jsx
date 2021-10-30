import "./styles.scss";

import AppList from "./AppList";
import PinnedApps from "./PinnedApps";
import SideBar from "./SideBar";
import { useMemo, useState } from "react";
import throttle from "lodash.throttle";

const StartMenu = ({ visible, ...rest }) => {
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
	const getOffset = useMemo(() => {
		// if (e.target.closest(".mouse-hover")) {
		// return throttle((e) => console.log(e), 150);
		return throttle(
			(e) =>
				setCoordinates({
					x: e.pageX - e.target.closest(".mouse-hover")?.offsetLeft,
					y: e.pageY - e.target.closest(".mouse-hover")?.offsetTop,
					w: e.target.closest(".mouse-hover")?.offsetWidth,
					h: e.target.closest(".mouse-hover")?.offsetHeight,
					bx: e.pageX - e.target.closest(".start-menu").offsetLeft,
					by: e.pageY - e.target.closest(".start-menu").offsetTop
				}),
			50
		);
		// }
	}, []);

	return (
		<div
			{...rest}
			onMouseMove={(e) => getOffset(e)}
			style={{
				"--mouse-x": `${coordinates.x}px`,
				"--mouse-y": `${coordinates.y}px`,
				"--mouse-w": `${coordinates.w}px`,
				"--mouse-h": `${coordinates.h}px`,
				"--mouse-bx": `${coordinates.bx}px`,
				"--mouse-by": `${coordinates.by}px`
			}}>
			<SideBar />
			<AppList />
			<PinnedApps visible={visible} mp={coordinates} />
		</div>
	);
};

export default StartMenu;
