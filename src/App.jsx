import CardDetails from "./components/CardDetails";
import "./index.css";

function App() {
	return (
		<div className="max-w-screen min-h-screen relative z-10 font-spaceGrotesk">
			<div className="change-img"></div>
			<div>
				<CardDetails />
			</div>
		</div>
	);
}

export default App;
