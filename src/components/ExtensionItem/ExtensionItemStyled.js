import styled from "@emotion/styled";

export const ItemStyled = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: ${({ theme }) => theme.colors.itemBg};

  border-radius: 12px;

  &:not(:last-of-type) {
    margin-bottom: 12px;

    @media (min-width: 768px){
      margin: 0;
    }

    @media (min-width: 768px){
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const ContentCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const Thumb = styled.div`
  display: inline-block;

  width: 60px;
  height: 60px;

  margin-right: 16px;

  overflow: hidden;

  border-radius: 12px;

  & > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const TextCon = styled.div`
  width: 76%;

  & > h4 {
    margin-bottom: 8px;

    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.2px;
    font-weight: ${({ theme }) => theme.weight.bold};

    color: ${({ theme }) => theme.colors.font};
  }

  & > p {
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -0.5px;

    color: ${({ theme }) => theme.colors.fontText};
  }
`;

export const BtnCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RemoveBtn = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  font-size: 16px;
  line-height: 1.4;
  letter-spacing: -0.5px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.font};

  border: 1px solid #c6c6c6;
  border-radius: 36px;
`;

export const SwitchBtn = styled.button`
background-color: transparent;
`