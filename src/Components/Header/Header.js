import React from "react";
import "./Header.css";
function Header() {
	return (
		<div className="header">
			<div className="calculator_history">
				<p>10+2</p>
				<p>125-878*4</p>
				<p>10+5</p>
			</div>
			<br />
			<div className="mathematical_expression">
				<p>10+50+89</p>
			</div>
			<p className="calculator_result">149</p>
		</div>
	);
}

export default Header;
