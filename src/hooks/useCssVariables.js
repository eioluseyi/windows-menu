import { useContext, useEffect, useState } from "react";
import { scrollContext } from "../components/StartMenu";
import { useMousePosition } from "./useMousePosition";

const useCssVariables = ({ app }) => {
	const mousePosition = useMousePosition();
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

	const scrolling = useContext(scrollContext);

	useEffect(
		() => setCoordinates(app.current.getBoundingClientRect().toJSON()),
		[mousePosition, scrolling, app]
	);

	return {
		"--before-bg-x": `calc((${mousePosition.x} - ${coordinates.left}) * 1px)`,
		"--before-bg-y": `calc((${mousePosition.y} - ${coordinates.top}) * 1px)`,
		"--box-width": `${coordinates.width}px`,
		"--box-height": `${coordinates.height}px`
	};
};

export { useCssVariables };
