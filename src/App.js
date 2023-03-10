import React, { useState, useEffect } from "react";

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
const operators = ["-", "+", "*", "/"];

function App() {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("calculator-app-mode")) || false
	);
	const [expression, setExpression] = useState("");
	const [result, setResult] = useState("");
	const [history, setHistory] = useState(
		JSON.parse(localStorage.getItem("calculator-app-history")) || []
	);

	const handleNumPress = (keyCode, key) => {
		if (!keyCode) return;
		if (!usedKeyCodes.includes(keyCode)) return;

		if (numbers.includes(key)) {
			if (key === "0") {
				if (expression.length === 0) return;
			}
			calculateResult(expression + key);
			setExpression(expression + key);
		} else if (operators.includes(key)) {
			if (!expression) return;

			const lastChar = expression.slice(-1);
			if (operators.includes(lastChar)) return;
			if (lastChar === ".") return;

			setExpression(expression + key);
		} else if (key === ".") {
			if (!expression) return;
			const lastChar = expression.slice(-1);
			if (!numbers.includes(lastChar)) return;

			setExpression(expression + key);
		} else if (keyCode === 67) {
			if (!expression) return;
			setHistory([]);
			setExpression("");
			setResult("");
		} else if (keyCode === 13) {
			if (!expression) return;
			calculateResult(expression);

			let tempHistory = [...history];
			if (tempHistory.length > 20) tempHistory = tempHistory.splice(0, 1);
			tempHistory.push(expression);
			setHistory(tempHistory);
		}
	};

	const calculateResult = (exp) => {
		if (!exp) {
			setResult("");
			return;
		}
		const lastChar = exp.slice(-1);
		if (!numbers.includes(lastChar)) exp = exp.slice(0, -1);

		const answer = eval(exp).toFixed(2) + "";
		setResult(answer);
		setExpression(answer);
	};

	useEffect(() => {
		localStorage.setItem("calculator-app-mode", JSON.stringify(darkMode));
	}, [darkMode]);

	useEffect(() => {
		localStorage.setItem("calculator-app-history", JSON.stringify(history));
	}, [history]);

	return (
		<div
			className="App"
			tabIndex="0"
			onKeyDown={(event) => handleNumPress(event.keyCode, event.key)}
			data-theme={darkMode ? "dark" : ""}
		>
			<div className="smart_calculator">
				<div className="smart_calculator_navbar">
					<div
						className="smart_calculator_navbar_toggle"
						onClick={() => setDarkMode(!darkMode)}
					>
						<div
							className={`smart_calculator_navbar_toggle_round ${
								darkMode
									? "smart_calculator_navbar_toggle_round_active"
									: ""
							}`}
						/>
					</div>
					<img src={darkMode ? moonIcon : sunIcon} alt="mode" />
				</div>

				<Header
					expression={expression}
					result={result}
					history={history}
				/>
				<NumPad handleNumPress={handleNumPress} />
			</div>
		</div>
	);
}

export default App;
