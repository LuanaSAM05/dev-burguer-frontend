import styled from "styled-components";


export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 8px 0;

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;


export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.white};
    border-radius: 4px;
    background-color: ${(props) => props.theme.purple};
    transition: all 0.4s;
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }

  @media (max-width: 480px) {
    gap: 4px;

    button {
      height: 22px;
      width: 22px;
    }
  }
`;


export const TrashImage = styled.img`
  height: 25px;
  width: 27px;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 20px;
    width: 22px;
  }
`;


export const ProductTotalPrice = styled.p`
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
    padding-left: 10px;
    padding-right: 90px;
  }
`;