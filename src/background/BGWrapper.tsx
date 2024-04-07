import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: black;
	overflow: hidden;
`;

const Content = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(22, 26, 29, 0.4);
`;

export const BGWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Wrapper>
			<Content>
				{children}
			</Content>;
		</Wrapper>
	);
};
