import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${(props) => props.theme.mainBlack};
  width: 100%;
  height: 72px;
  padding: 0 56px;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    hr {
      height: 24px;
      border: 1px solid ${(props) => props.theme.darkGray};
    }
  }

  @media (max-width: 480px) {
    div {
      gap: 12px;
    }
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) =>
    props.$isActive ? props.theme.purple : props.theme.white};

  border-bottom: ${(props) =>
    props.$isActive ? `1px solid ${props.theme.purple}` : "none"};

  padding-bottom: 5px;
  text-decoration: none;
  font-size: 17px;
  transition: color 200ms;

  &:hover {
    color: ${(props) => props.theme.purple};
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    color: ${(props) => props.theme.white};

    span {
      font-weight: 700;
      color: ${(props) => props.theme.purple};
    }
  }

  @media (max-width: 480px) {
    gap: 6px;

    svg {
      width: 20px;
      height: 20px;
    }

    p {
      display: none;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;
  cursor: pointer;

  @media (max-width: 480px) {
    gap: 6px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Logout = styled.button`
  color: ${(props) => props.theme.red};
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const CountBadge = styled.span`
  position: absolute;
  top: -6px;
  right: 38px;

  background: red;
  color: white;

  font-size: 12px;
  font-weight: bold;

  width: 18px;
  height: 18px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    right: 28px;
    width: 15px;
    height: 15px;
    font-size: 10px;
  }
`;