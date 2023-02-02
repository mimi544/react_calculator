import React from "react";
import "./NumPad.css";
const NumPad = (props) => {
	const buttons = [
		{
			label: "DEL",
			keyCode: 46,
		},
		{
			label: "%",
			keyCode: 53,
		},
		{
			label: "C",
			keyCode: 67,
		},
		{
			label: "⌫",
			keyCode: 8,
		},
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
			label: "÷",
			keyCode: 111,
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
			label: "×",
			keyCode: 56,
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
			label: "﹣",
			keyCode: 109,
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
		{
			label: "+",
			keyCode: 107,
		},
	];

	return (
		<div className="num_pad">
			<div className="num_pad_num">
				{buttons.map((item, index) => {
					if (
						item.label === "DEL" ||
						item.label === "⌫" ||
						item.label === "C" ||
						item.label === "%" ||
						item.label === "÷" ||
						item.label === "×" ||
						item.label === "﹣" ||
						item.label === "+"
					)
						return (
							<p
								onClick={() =>
									props.handleNumPress(
										item.keyCode,
										item.label
									)
								}
								key={index}
								style={{ backgroundColor: "grey" }}
							>
								{item.label}
							</p>
						);
					else
						return (
							<p
								onClick={() =>
									props.handleNumPress(
										item.keyCode,
										item.label
									)
								}
								key={index}
							>
								{item.label}
							</p>
						);
				})}
			</div>
		</div>
	);
};

export default NumPad;
