import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
padding-top: 20px;
padding-bottom: 20px;
padding-left: 16px;
padding-right: 16px;
`

export const HeaderCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 12px;
padding-bottom: 12px;
padding-left: 12px;
padding-right: 12px;

background-color: ${({theme})=> theme.colors.itemBg};

border-radius: 12px;
`