import styled from "@emotion/styled";

export const LogoCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;

& > p{
    margin-left: 12px;

    font-size: 24px;
    line-height: 1.3;
    letter-spacing: -0.5px;
    font-weight: ${({theme})=> theme.weight.semiBold};
}
`