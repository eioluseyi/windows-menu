import { useContext, useEffect, useState } from "react";
import { scrollContext } from "../components/StartMenu/PinnedApps";
import { useMousePosition } from "./useMousePosition";

const useCssVariables = ({ app }) => {
	const mousePosition = useMousePosition();
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

	const scrolling = useContext(scrollContext);

	useEffect(
		() => setCoordinates(app.current.getBoundingClientRect().toJSON()),
		[mousePosition, scrolling]
	);

	return {
		"--before-bg-x": `calc((${mousePosition.x} - ${coordinates.left}) * 1px)`,
		"--before-bg-y": `calc((${mousePosition.y} - ${coordinates.top}) * 1px)`
	};
};

export { useCssVariables };
