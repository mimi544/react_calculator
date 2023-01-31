import React, {useState} from "react";
import "./App.css";
import moonIcon from "./assets/moon.png";
import sunIcon from "./assets/sun.png";

function App() {
  const[darkmode, setDarkmode] = React.useState(false);
	return (
		<div className="App">
			<div className="smart_calculator">
				<div className="smart_calculator_navbar">
					<div className="smart_calculator_navbar_toogle">
						<div className="smart_calculator_navbar_round" />
					</div>
          <img src={} alt = "mode"/>
				</div>
			</div>
		</div>
	);
}

export default App;
