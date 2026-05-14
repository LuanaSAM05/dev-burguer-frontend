import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background-color: ${(props) => props.theme.darkPurple};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -15px;

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
    text-align: center;
    padding: 0 16px;
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    height: 50px;

    p { font-size: 13px; }
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    height: auto;
    min-height: 50px;
    padding: 10px 16px;

    p { font-size: 12px; }
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    padding: 10px 12px;

    p { font-size: 11px; }
  }
`;