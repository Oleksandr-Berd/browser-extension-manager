import styled from "@emotion/styled";

export const AppStyled = styled.div`
width: 100%;
height: 100vh;

padding-top: 20px;
padding-bottom: 20px;
padding-left: 16px;
padding-right: 16px;

background-color: ${({ theme }) => theme.colors.rootBg};
`