import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const RoundBG = styled.div<{
	$x: number;
	$y: number;
	$diameter: number;
	$timer: number;
}>`
	top: ${({ $y }) => $y + "px"};
	left: ${({ $x }) => $x + "px"};
	width: ${({ $diameter }) => $diameter + "px"};
	height: ${({ $diameter }) => $diameter + "px"};
	background-color: rgba(54, 180, 255, 0.8);
	border-radius: 50%;
	backdrop-filter: blur(40px);
	filter: blur(150px);
	position: absolute;
	transition: all 5s;
`;

const initPosition = [
	{ id: "1", x: 300, y: 400, diameter: 250, timer: 2 },
	{ id: "2", x: -25, y: -10, diameter: 251, timer: 2 },
];

export const BGRounds = () => {
	const [posArr, setPosArray] = useState(initPosition);

	let timerId: unknown = null;


	useEffect(() => {
		const timerFunc = () => {
			setPosArray((state) => {
				return Math.round(Math.random() * 5) > 7
					? initPosition
					: state.map((item) => ({
							...item,
							x: Math.round(
								Math.random() * (Math.random() * 10 > 5 ? 300 : -50)
							),
							y: Math.round(
								Math.random() * (Math.random() * 10 > 5 ? 800 : -50)
							),
							timer: Math.round(Math.random() * 5),
					  }));
			});
			timerId = setTimeout(timerFunc, 10 * 1000);
		};
		timerId = setTimeout(timerFunc, 10 * 1000);
		return () => {
			!!timerId && clearTimeout(timerId as number);
		};
	}, []);

	return (
		<>
			{posArr.map((item) => (
				<RoundBG
					key={item.id}
					$x={item.x}
					$y={item.y}
					$diameter={item.diameter}
					$timer={item.timer}
				/>
			))}
		</>
	);
};
