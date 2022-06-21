import { useRef } from "react";
import { useCssVariables } from "../../../hooks/useCssVariables";
import icon from "@system32/startMenu/pinnedApps/icons/office.png";

const PinnedApp = () => {
	const app = useRef(null);
	const cssVariables = useCssVariables({ app });

	return (
		<div ref={app} style={cssVariables} className="pinned-app">
			<img className="icon" src={icon} alt="icon" />
			<span className="title">Office</span>
		</div>
	);
};

export { PinnedApp };
