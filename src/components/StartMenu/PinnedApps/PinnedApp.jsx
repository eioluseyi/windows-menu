import { useRef } from "react";
import { useCssVariables } from "../../../hooks/useCssVariables";

const PinnedApp = () => {
	const app = useRef(null);
	const cssVariables = useCssVariables({ app });

	return <div ref={app} style={cssVariables} className="pinned-app"></div>;
};

export { PinnedApp };
