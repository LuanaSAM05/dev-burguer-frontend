import styled from "styled-components";
import BannerHamburguer from "../../assets/banner-hamburguer2.jpg";
import Background from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;

  background: linear-gradient(
      rgba(255,255,255, 0.8),
      rgba(255,255,255, 0.8)
  ),
  url('${Background}');

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
    line-height: 75px;
    position: relative;
    z-index: 2;
    color: ${(props) => props.theme.white};
    text-align: center;
    margin-left: 40%;

    span {
      display: block;
      font-size: 40px;
    }
  }

  @media (max-width: 768px) {
    height: 280px;

    h1 {
      font-size: 52px;
      line-height: 48px;
      margin-left: 200px;

      span { font-size: 16px; }
    }
  }

  @media (max-width: 480px) {
    height: 200px;

    h1 {
      font-size: 38px;
      line-height: 36px;
      margin-left: 200px;

      span { font-size: 14px; }
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 20px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 16px;
  }
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

  @media (max-width: 768px) { font-size: 18px; }
  @media (max-width: 480px) { font-size: 15px; }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  max-width: 1280px;
  width: 100%;
  margin: 50px auto;
  padding: 40px;

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 80px 20px; /* ✅ gap vertical grande para imagem não sobrepor */
    padding: 20px;
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); /* ✅ 2 colunas no mobile */
    gap: 80px 12px; /* ✅ gap vertical grande para imagem não sobrepor */
    padding: 16px;
    margin: 20px auto;
    padding-top: 60px; /* ✅ espaço para as imagens absolutas */
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* ✅ mantém 2 colunas */
    gap: 75px 10px;
    padding: 12px;
    padding-top: 55px;
    margin: 16px auto;
  }
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

  @media (max-width: 480px) {
    margin: 24px auto 40px;
    font-size: 14px;
  }
`;