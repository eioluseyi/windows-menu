import { createContext, useContext, useEffect, useRef, useState } from "react";

const scrollContext = createContext();

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	const updateMousePosition = (ev) => {
		setMousePosition({ x: ev.clientX, y: ev.clientY });
		// console.log(ev)
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () => window.removeEventListener("mousemove", updateMousePosition);
	}, []);

	return mousePosition;
};

const PinnedApp = ({ visible = false }) => {
	const mousePosition = useMousePosition();
	const app = useRef(null);
	const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

	const scrolling = useContext(scrollContext);

	useEffect(
		() => setCoordinates(app.current.getBoundingClientRect().toJSON()),
		[mousePosition, scrolling]
	);

	return (
		<div
			ref={app}
			style={{
				"--before-bg-x": `calc((${mousePosition.x} - ${coordinates.left}) * 1px)`,
				"--before-bg-y": `calc((${mousePosition.y} - ${coordinates.top}) * 1px)`
			}}
			className="application mouse-hover">
			<div className="pinned-app__top-bg"></div>
			<div className="pinned-app__overlay"></div>
		</div>
	);
};

const PinnedApps = ({ sp }) => {
	const [scrollObj, setScrollObj] = useState({});

	const pineApple = Array(30).fill(1);

	return (
		<div className="pinned-apps" onScroll={(e) => setScrollObj(e)}>
			<scrollContext.Provider value={scrollObj}>
				{pineApple.map(() => (
					<PinnedApp />
				))}
			</scrollContext.Provider>
		</div>
	);
};

export default PinnedApps;
