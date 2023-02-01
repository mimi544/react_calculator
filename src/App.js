import React, { useState } from "react";

import "./App.css";
import moonIcon from "./assets/moon.png";
import sunIcon from "./assets/sun.png";
import Header from "./Components/Header/Header";
import NumPad from "./Components/NumPad/NumPad";

const usedKeyCodes = [
	46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 67, 96, 97, 98, 99, 100, 101,
	102, 103, 104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators1 = ["DEl", "%", "C"];
const operators2 = ["-", "+", "*", "/"];

function App() {
	const [darkmode, setdarkmode] = useState(false);
	const [expression, setexpression] = useState("");
	const [result, setresult] = useState("");

	const handleNumPress = (keyCode, key) => {
		if (!keyCode) return;
	};
	return (
		<div
			className="App"
			tabIndex="0"
			onKeyDown={(event) => handleNumPress(event.keyCode, event.num)}
			data-theme={darkmode ? "dark" : ""}
		>
			<div className="smart_calculator">
				<div className="smart_calculator_navbar">
					<div
						className="smart_calculator_navbar_toggle"
						onClick={() => setdarkmode(!darkmode)}
					>
						<div
							className={`smart_calculator_navbar_toggle_round ${
								darkmode
									? "smart_calculator_navbar_toggle_round_active"
									: ""
							}`}
						/>
					</div>
					<img src={darkmode ? moonIcon : sunIcon} alt="mode" />
				</div>

				<Header />
				<NumPad handleNumPress={handleNumPress} />
			</div>
		</div>
	);
}

export default App;
