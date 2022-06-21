import { useRef } from "react";
import { useCssVariables } from "../../hooks/useCssVariables";

const ActionButton = (props) => {
	const app = useRef(null);
	const cssVariables = useCssVariables({ app });

	return (
		<div
			className={`action-button ${props.name}`}
			ref={app}
			style={cssVariables}>
			<img
				src="https://img.icons8.com/ios-glyphs/30/000000/windows-10.png"
				alt="ico"
			/>
			{props.name}
		</div>
	);
};

const SideBar = () => {
	return (
		<div className="side-bar">
			<ActionButton name="START" />
			<ActionButton name="USER" />
			<ActionButton name="Documents" />
			<ActionButton name="Pictures" />
			<ActionButton name="Settings" />
			<ActionButton name="Power" />
		</div>
	);
};

export default SideBar;
