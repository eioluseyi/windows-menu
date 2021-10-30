import "./styles.scss";
import Screen from "./components/Screen";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
	return (
		<div className="App">
			<DndProvider backend={HTML5Backend}>
				<Screen />
			</DndProvider>
		</div>
	);
}
