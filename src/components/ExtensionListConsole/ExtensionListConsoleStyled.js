import styled from "@emotion/styled";
import { Field } from "formik";

export const FormStyled = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  color: ${({ theme }) => theme.colors.font};

  & > h3 {
    margin-bottom: 24px;

    font-size: 34px;
    letter-spacing: -1px;
  }
`;

export const RadioList =styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const CurrentRadio = styled.div`
position: relative;

padding-top: 8px;
padding-bottom: 8px;
padding-left: 20px;
padding-right: 20px;

font-size: 20px;
font-weight: ${({theme}) => theme.weight.regular};
line-height: 1.4;
letter-spacing: -0.3px;

background-color: ${({theme})=> theme.colors.itemBg};
color: ${({theme})=> theme.colors.font};


border-radius: 12px;

&.selected{
    background-color: ${({theme})=> theme.colors.selected};
    color: #FBFDFE;
}

&:not(:last-of-type){
    margin-right: 12px;
}
`

export const DefaultRadioStyled = styled(Field)`
 position: absolute;

 top: 0;
 left: 0;

  width: 100%;
  height: 100%;

  opacity: 0;
`
