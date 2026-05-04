import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;


  padding: 0 0 60px 0;

  .carousel-item {
    padding-right: 16px;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  /* setas */
  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
  }


  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;

    .carousel-item {
      padding-right: 16px;
    }
  }

  /* Notebook */
  @media (max-width: 1279px) and (min-width: 1024px) {
    .carousel-item {
      padding-right: 14px;
    }
  }

  /* Tablet */
  @media (max-width: 1023px) and (min-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;

    .carousel-item {
      padding-right: 12px;
    }

    .react-multi-carousel-list {
      overflow: hidden;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    padding-left: 12px;
    padding-right: 12px;

    .carousel-item {
      padding-right: 10px;
    }

    .react-multi-carousel-list {
      overflow: hidden;
    }
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;

    .carousel-item {
      padding-right: 8px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.gren};
  padding-bottom: 12px;
  position: relative;
  text-align: center;

  margin: 70px 0 40px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background: ${(props) => props.theme.gren};
    left: calc(50% - 28px);
  }
`;