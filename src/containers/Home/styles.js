import styled from "styled-components";
import BannerHome from "../../assets/banner-home.png";
import Background from "../../assets/background.png";

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position: absolute;
    right: 20%;
    top: 10%;
  }

  @media (max-width: 768px) {
    height: 300px;

    h1 {
      font-size: 48px;
      right: 5%;
      top: 5%;
    }
  }

  @media (max-width: 480px) {
    height: 220px;

    h1 {
      font-size: 50px;
      right: 5%;
      top: 5%;
      margin-top: 40px;
    }
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255,255,255, 0.8),
      rgba(255,255,255, 0.8)
  ),
  url('${Background}');
  min-height: 500px;
  background-size: cover;

  flex: 1; 
  display: flex; 
  flex-direction: column; 
`;
