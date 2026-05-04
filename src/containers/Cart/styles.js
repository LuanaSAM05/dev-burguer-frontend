import styled from "styled-components";
import Texture from '../../assets/texture.jpg';
import Background from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondWhite};
  background: linear-gradient(
      rgba(255,255,255, 0.8),
      rgba(255,255,255, 0.8)
  ),
  url('${Background}');
  min-height: 100vh;
  background-size: cover;

  display: flex;
  flex-direction: column;

  overflow-x: hidden; 
`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;

  img {
    height: 130px;
  }

  @media (max-width: 480px) {
    height: 150px;

    img { 
        height: 120px; 
        margin-left: 40px;
    }
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${(props) => props.theme.gren};
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50% - 28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background: ${(props) => props.theme.purple};
  }

  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 30px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 35%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
  gap: 40px;

  flex: 1; 

  /* Tablet */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 24px 16px;
    gap: 20px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 16px 0 16px 6px;
    margin: 0;
    max-width: 100%;
    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px 0 12px 4px;
    margin: 0;
  }
`;