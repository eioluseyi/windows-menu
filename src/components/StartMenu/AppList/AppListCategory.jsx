const AppListCategory = ({ category }) => {
	return (
		// <>
		/* <div className="category mouse-hover" key={cat.name}>{cat.name}</div> */
		category.children.map((app) => (
			<div
				className="app-list-category category application mouse-effect__wrapper mouse-hover"
				key={app.name}>
				<div className="content title">
					<img src={app.imgSrc} alt={`${app.name} icon`} />
					{` ${app.name}`}
				</div>
				<div className="mouse-effect__top-bg"></div>
				<div className="mouse-effect__overlay"></div>
			</div>
		))
		// </>
	);
};

export { AppListCategory };
