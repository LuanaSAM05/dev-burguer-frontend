import styled from "styled-components";
import BannerHamburguer from "../../assets/banner-hamburguer2.jpg";
import Background from "../../assets/background.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background: linear-gradient(
      rgba(255,255,255, 0.8),
      rgba(255,255,255, 0.8)
  ),
  url('${Background}');

  min-height: 500px;

  background-size: 1600px;
  background-repeat: repeat;
  background-position: center;
  background-attachment: fixed;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 480px;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    background: url('${BannerHamburguer}') no-repeat center center;
    background-size: cover;

    filter: brightness(50%);
    z-index: 1;
  }

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;

    position: relative;
    z-index: 2;

    color: ${(props) => props.theme.white};
    right: 0;
    text-align: center;

    span {
      display: block;
      font-size: 20px;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  margin-top: 30px;
`;

export const CategoryButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;

  font-size: 24px;
  font-weight: 500;

  color: ${(props) =>
    props.$isActiveCategory ? props.theme.purple : "#6a6767"};

  padding-bottom: 5px;

  border-bottom: ${(props) =>
    props.$isActiveCategory && `3px solid ${props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 60px;

  max-width: 1280px;
  width: 100%;

  margin: 50px auto;

  padding: 40px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 40px auto 80px;

  padding: 10px 18px;

  background: rgba(106, 63, 143, 0.08);
  border: 1px solid ${(props) => props.theme.purple};

  color: ${(props) => props.theme.purple};

  font-weight: 600;
  font-size: 16px;

  border-radius: 10px;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.purple};
    color: white;
    transform: scale(1.05);
  }
`;