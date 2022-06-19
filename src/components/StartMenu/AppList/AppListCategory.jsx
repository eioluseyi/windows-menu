import { useRef } from "react";
import { useCssVariables } from "../../../hooks/useCssVariables";

const AppListCategory = ({ category }) => {
	const app = useRef(null);
	const cssVariables = useCssVariables({ app });

	return (
		<>
			<div
				className="category__title"
				key={category.name}
				ref={app}
				style={cssVariables}>
				{category.name}
			</div>

			{category.children.map((app) => (
				<div
					className="app-category app-item"
					key={app.name}
					ref={app}
					style={cssVariables}>
					<div className="content title">
						<img src={app.imgSrc} alt={`${app.name} icon`} />
						{` ${app.name}`}
					</div>
				</div>
			))}
		</>
	);
};

export { AppListCategory };
