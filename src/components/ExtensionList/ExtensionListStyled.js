import styled from "@emotion/styled";

export const ExtensionListStyled = styled.ul`
padding-top: 20px;

@media (min-width:768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
}

@media (min-width: 1280px){
    grid-template-columns: repeat(3, 1fr);
}
`