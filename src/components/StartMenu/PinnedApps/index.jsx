import { createContext, useState } from "react";
import { PinnedApp } from "./PinnedApp";

const scrollContext = createContext();

const PinnedApps = () => {
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
export { scrollContext };
