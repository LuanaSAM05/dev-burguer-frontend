import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0;

  .carousel-container {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .carousel-item {
    padding: 0 4px;
  }

  @media (max-width: 767px) {
    .carousel-item {
      padding: 0 2px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 42px;
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
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-top: 24px;
    margin-bottom: 12px;
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 16px; 
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 220px; 
  cursor: pointer;

  @media (max-width: 1023px) and (min-width: 768px) {
    height: 200px;
    border-radius: 12px;
  }

  @media (max-width: 767px) {
    height: 160px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    height: 130px;
    border-radius: 8px;
  }
`;

export const CategoryButton = styled.button`
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 

  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);

  padding: 6px 18px; 
  border-radius: 30px;

  font-size: 25px; 
  font-weight: 500;
  text-align: center;

  border: none;
  cursor: pointer;
  white-space: nowrap; 

  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;