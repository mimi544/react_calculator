import React from "react";
import "./NumPad.css";
const NumPad = (props) => {
	const nums = [
		{
			keyCode: 55,
			label: "7",
		},
		{
			keyCode: 56,
			label: "8",
		},
		{
			keyCode: 57,
			label: "9",
		},
		{
			keyCode: 52,
			label: "4",
		},
		{
			keyCode: 53,
			label: "5",
		},
		{
			keyCode: 54,
			label: "6",
		},
		{
			keyCode: 49,
			label: "1",
		},
		{
			keyCode: 50,
			label: "2",
		},
		{
			keyCode: 51,
			label: "3",
		},
		{
			keyCode: 48,
			label: "0",
		},
		{
			keyCode: 190,
			label: ".",
		},
		{
			keyCode: 13,
			label: "=",
		},
	];

	const signs = [
		{
			label: "⌫",
			keyCode: 8,
			value: "backspace",
		},
		{
			label: "÷",
			keyCode: 111,
			value: "/",
		},
		{
			label: "×",
			keyCode: 56,
			value: "*",
		},
		{
			label: "﹣",
			keyCode: 109,
			value: "-",
		},
		{
			label: "+",
			keyCode: 107,
			value: "+",
		},
	];
	return (
		<div className="numpad">
			<div className="numpad_nums">
				{nums.map((item, index) => (
					<p
						onClick={() =>
							props.handleKeyPress(item.keyCode, item.label)
						}
						key={index}
					>
						{item.label}
					</p>
				))}
			</div>
			<div className="numpad_signs">
				{signs.map((item, index) => (
					<p
						onClick={() =>
							props.handleKeyPress(item.keyCode, item.value)
						}
						key={index}
					>
						{item.label}
					</p>
				))}
			</div>
		</div>
	);
};

export default NumPad;
