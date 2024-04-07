import styled from "styled-components";

const RoundBG = styled.div<{
	$x: number;
	$y: number;
	$diameter: number;
}>`
	top: ${({ $y }) => $y + "px"};
	left: ${({ $x }) => $x + "px"};
	width: ${({ $diameter }) => $diameter + "px"};
	height: ${({ $diameter }) => $diameter + "px"};
	background-color: rgba(54, 180, 255, 1);
	border-radius: 50%;
	filter: blur(100px);
	position: absolute;
`;


export const BGRounds = () => {
	
	const initPosition = [
		{ id: "1", x: -119, y: -2, diameter: 200 },
		{ id: "2", x: 300, y: 509, diameter: 150 },

	];

	return (
		<>
			{initPosition.map((item) => (
				<RoundBG
					key={item.id}
					$x={item.x}
					$y={item.y}
					$diameter={item.diameter}
				/>
			))}
		</>
	);
};
