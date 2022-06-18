import { useRef } from "react";
import { useCssVariables } from "../../../hooks/useCssVariables";

const PinnedApp = () => {
	const app = useRef(null);
	const cssVariables = useCssVariables({ app });

	return (
		<div
			ref={app}
			style={cssVariables}
			className="pinned-app mouse-effect__wrapper">
			<div className="pinned-app__top-bg mouse-effect__top-bg"></div>
			<div className="pinned-app__overlay mouse-effect__overlay"></div>
		</div>
	);
};

export { PinnedApp };
