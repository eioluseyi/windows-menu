import { PinnedApp } from "./PinnedApp";

const PinnedApps = () => {
	const pineApple = Array(30).fill(1);

	return (
		<div className="pinned-apps">
			{pineApple.map((_, idx) => (
				<PinnedApp key={idx} />
			))}
		</div>
	);
};

export default PinnedApps;
