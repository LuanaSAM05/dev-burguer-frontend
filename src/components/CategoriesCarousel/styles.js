import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;

  @media (min-width: 1025px) {
    padding-left: 0;
    padding-right: 0;

    .carousel-item {
      padding-right: 16px;
    }
  }

  /* TABLET */
  @media (max-width: 1024px) {
    padding-left: 16px;

    .carousel-item {
      padding-right: 14px;
    }
  }

  /* MOBILE */
  @media (max-width: 768px) {
    padding-left: 12px;

    .carousel-item {
      padding-right: 10px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    font-size: 30px;
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  width: 100%;
  height: 255px;
  cursor: pointer;


  @media (max-width: 768px) {
    height: 180px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 140px;
    margin-top: 20px;
  }
`;

export const CategoryButton = styled.button`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: 500;
  text-align: center;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 12px;
    margin-top: 95px;
  }
`;