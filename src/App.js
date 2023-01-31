import React, { useState } from "react";

import "./App.css";
import moonIcon from "./assets/moon.png";
import sunIcon from "./assets/sun.png";
import Header from "./Components/Header/Header";
import NumPad from "./Components/NumPad/NumPad";

function App() {
	const [darkmode, setdarkmode] = useState(false);
	return (
		<div className="App" data-theme={darkmode ? "dark" : ""}>
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
				<NumPad />
			</div>
		</div>
	);
}

export default App;
