import { useRef } from "react";
import { useCssVariables } from "../../../hooks/useCssVariables";

const AppListCategory = ({ category }) => {
	const app = useRef(null);
	const cssVariables = useCssVariables({ app });

	// console.log(cssVariables["--box-height"]);

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
					className="app-item"
					key={app.name}
					// // ref={app}
					// // style={cssVariables}
				>
					<img className="icon" src={app.imgSrc} alt={`${app.name} icon`} />
					<div className="content title">{` ${app.name}`}</div>
				</div>
			))}
		</>
	);
};

export { AppListCategory };
