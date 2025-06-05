import styled from "@emotion/styled";

export const AppStyled = styled.div`

padding-top: 20px;
padding-bottom: 20px;
padding-left: 16px;
padding-right: 16px;

background-color: ${({ theme }) => theme.colors.rootBg};

@media (min-width: 768px){
padding-top: 24px;
padding-bottom: 64px;
padding-left: 32px;
padding-right: 32px;
}
`