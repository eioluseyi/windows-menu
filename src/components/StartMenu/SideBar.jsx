const ActionButton = (props) => {
	return (
		<div className={`action-button ${props.name}`}>
			<img src="https://img.icons8.com/ios-glyphs/30/000000/windows-10.png" alt="ico" />
			{props.name}
		</div>
	);
};

const SideBar = () => {
	return (
		<div className="side-bar">
			<ActionButton name="start" />
			<ActionButton name="user" />
			<ActionButton name="documents" />
			<ActionButton name="pictures" />
			<ActionButton name="settings" />
			<ActionButton name="power" />
		</div>
	);
};

export default SideBar;
