import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.secondBlack};
  border-bottom: 1px solid ${(props) => props.theme.lightGray};

  &:last-child {
    border-top-right-radius: 20px;
  }
  &:first-child {
    border-top-left-radius: 20px;
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    padding: 12px 8px;
    font-size: 13px;
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    padding: 8px 4px;
    font-size: 11px;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    padding: 6px 3px;
    font-size: 10px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.secondBlack};
  font-weight: 500;
  line-height: 115%;

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    padding: 12px 8px;
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    padding: 8px 4px;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    padding: 6px 3px;
  }
`;

export const Body = styled.tbody``;