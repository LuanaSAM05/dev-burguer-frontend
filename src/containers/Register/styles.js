import { Link as ReactLink } from 'react-router-dom';
import styled from "styled-components";
import BackgroundLogin from "../../assets/background-login.png";
import Background from "../../assets/background.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  /* Mobile padrão e pequeno */
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    max-width: 45%;
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    max-width: 100%;
    height: 220px;
    padding-top: 30px;
    align-items: flex-end;

    img {
      width: 35%;
    }
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    height: 180px;
    padding-top: 24px;

    img {
      width: 42%;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${Background}');
  background-size: cover;
  background-color: #1e1e1e;

  padding: 24px 16px;

  p {
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    max-width: 55%;
    padding: 32px 24px;
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    max-width: 100%;
    height: auto;
    flex: 1;
    padding: 24px 20px 40px;

    p {
      font-size: 15px;
    }
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    padding: 16px 14px 32px;

    p {
      font-size: 13px;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: ${(props) => props.theme.purple};
  text-align: center;

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    font-size: 34px;
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    font-size: 28px;
    margin-bottom: 8px;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  /* Mobile padrão */
  @media (max-width: 767px) {
    gap: 16px;
    padding: 16px;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;

    @media (max-width: 480px) {
      height: 44px;
    }
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.white};

    @media (max-width: 767px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.darkRed};
    font-weight: 600;
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;