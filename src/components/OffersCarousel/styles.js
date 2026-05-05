import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 0 60px 0;

  .carousel-item {
    padding: 0 8px;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  
  .react-multiple-carousel__arrow--left {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .carousel-item {
      padding: 0 12px;
    }
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    .carousel-item {
      padding: 0 8px;
    }

    .react-multi-carousel-list {
      overflow: hidden;
    }
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    .carousel-item {
      padding: 0 6px;
    }

    .react-multi-carousel-list {
      overflow: hidden;
    }
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    .carousel-item {
      padding: 0 5px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: ${(props) => props.theme.gren};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 80px 0 40px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background: ${(props) => props.theme.gren};
    left: calc(50% - 28px);
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    font-size: 26px;
    margin: 40px 0 30px 0;
  }

  /* Mobile padrão */
  @media (max-width: 767px) {
    font-size: 22px;
    margin: 30px 0 24px 0;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    font-size: 20px;
    margin: 24px 0 20px 0;
  }
`;