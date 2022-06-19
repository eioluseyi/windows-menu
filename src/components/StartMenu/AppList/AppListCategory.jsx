const AppListCategory = ({ category }) => {
	return (
		<>
			<div className="category__title" key={category.name}>{category.name}</div>
			{category.children.map((app) => (
				<div
					className="app-category app-item mouse-effect__wrappe"
					key={app.name}>
					<div className="content title">
						<img src={app.imgSrc} alt={`${app.name} icon`} />
						{` ${app.name}`}
					</div>
					<div className="mouse-effect__top-bg"></div>
					<div className="mouse-effect__overlay"></div>
				</div>
			))}
		</>
	);
};

export { AppListCategory };
