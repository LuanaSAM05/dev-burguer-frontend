import styled from "styled-components";

export const Container = styled.div``

export const ContainerButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    height: 44px;
    font-size: 24px;
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    height: 38px;
    font-size: 20px;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    height: 34px;
    font-size: 13px;
  }
`;